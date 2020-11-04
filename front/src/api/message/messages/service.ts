import {
  DiscussionLastMessageArgs,
  QueryMessagesArgs,
  SubscriptionSendMessageEventArgs,
} from '../../types';
import { MESSAGES, MessagesData } from './gql';
import {
  SEND_MESSAGE_EVENT,
  SendMessageEventData,
} from '../send-message/event.gql';

import produce from 'immer';
import { useMe } from '../../user/me/me.service';
import { useQuery } from '@apollo/client';

interface Return {
  data: MessagesData | undefined;
  loading: boolean;
  subscribeToSendMessageEvent: (
    variables: SubscriptionSendMessageEventArgs & DiscussionLastMessageArgs,
  ) => void;
}

export const useMessages = (variables: QueryMessagesArgs): Return => {
  const { meData } = useMe();

  const { data, loading, subscribeToMore } = useQuery<
    MessagesData,
    QueryMessagesArgs
  >(MESSAGES, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const subscribeToSendMessageEvent = (
    variables: SubscriptionSendMessageEventArgs & DiscussionLastMessageArgs,
  ): void => {
    subscribeToMore<
      SendMessageEventData,
      SubscriptionSendMessageEventArgs & DiscussionLastMessageArgs
    >({
      document: SEND_MESSAGE_EVENT,
      variables,
      updateQuery(prev, { subscriptionData }) {
        if (
          !subscriptionData ||
          subscriptionData.data.sendMessageEvent.lastMessage!.message.sender
            .id === variables.clientId
        ) {
          return prev;
        }
        return produce(prev, (draft) => {
          draft.messages.data.unshift(
            subscriptionData.data.sendMessageEvent.lastMessage!.message,
          );
        });
      },
    });
  };

  return {
    data,
    loading,
    subscribeToSendMessageEvent,
  };
};
