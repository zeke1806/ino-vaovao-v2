import { ApolloCache, useMutation } from '@apollo/client';
import {
  Discussion,
  DiscussionLastMessageArgs,
  MutationSendMessageArgs,
  QueryMessagesArgs,
} from '../../types';
import { ME, MeData } from '../../user/me/me.gql';
import { MESSAGES, MessagesData } from '../messages/gql';
import { SEND_MESSAGE, SendMessageData } from './gql';
import {
  USER_DISCUSSIONS,
  UserDiscussionsData,
} from '../../discussion/user-discussions/gql';

import produce from 'immer';

function updateMessages(
  cache: ApolloCache<SendMessageData>,
  discussion: Discussion,
): void {
  const prev = cache.readQuery<MessagesData, QueryMessagesArgs>({
    query: MESSAGES,
    variables: {
      discussionId: discussion.id,
    } as QueryMessagesArgs,
  });
  if (prev) {
    cache.writeQuery<MessagesData, QueryMessagesArgs>({
      query: MESSAGES,
      variables: {
        discussionId: discussion.id,
      } as QueryMessagesArgs,
      data: produce(prev, (draft) => {
        draft.messages.data.unshift(discussion.lastMessage!.message);
      }),
    });
  }
}

function updateUserDiscussions(
  cache: ApolloCache<SendMessageData>,
  discussion: Discussion,
): void {
  const { me } = cache.readQuery<MeData>({ query: ME })!;
  const prev = cache.readQuery<UserDiscussionsData, DiscussionLastMessageArgs>({
    query: USER_DISCUSSIONS,
    variables: {
      clientId: me.id,
    },
  });
  if (prev) {
    cache.writeQuery<UserDiscussionsData>({
      query: USER_DISCUSSIONS,
      data: produce(prev, (draft) => {
        draft.userDiscussions.splice(
          draft.userDiscussions.map((d) => d.id).indexOf(discussion.id),
          1,
          discussion,
        );
      }),
    });
  }
}

interface Return {
  submit: (
    variables: MutationSendMessageArgs & DiscussionLastMessageArgs,
  ) => void;
  loading: boolean;
}

export const useSendMessage = (): Return => {
  const [send, { loading }] = useMutation<
    SendMessageData,
    MutationSendMessageArgs & DiscussionLastMessageArgs
  >(SEND_MESSAGE, {
    update(cache, { data }) {
      if (data) {
        const { sendMessage } = data;
        updateMessages(cache, sendMessage);
        updateUserDiscussions(cache, sendMessage);
      }
    },
  });

  const submit = (
    variables: MutationSendMessageArgs & DiscussionLastMessageArgs,
  ): void => {
    send({
      variables,
    });
  };

  return {
    submit,
    loading,
  };
};
