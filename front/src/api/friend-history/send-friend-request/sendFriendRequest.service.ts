import { ApolloClient, useApolloClient, useMutation } from '@apollo/client';
import {
  FRIEND_SUGGESTION,
  FriendSuggestionData,
} from '../../user/friend-suggestion/friendSuggestion.gql';
import { FriendHistory, MutationSendFriendRequestArgs } from '../../types';
import {
  SEND_FRIEND_REQUEST,
  SendFriendRequestData,
} from './sendFriendRequest.gql';

import produce from 'immer';

function updateFriendSuggestion(
  apollo: ApolloClient<Record<string, unknown>>,
  sendFriendRequest: FriendHistory,
): void {
  const prevSuggestions = apollo.readQuery<FriendSuggestionData>({
    query: FRIEND_SUGGESTION,
  });
  if (prevSuggestions) {
    apollo.writeQuery<FriendSuggestionData>({
      query: FRIEND_SUGGESTION,
      data: produce(prevSuggestions, (draft) => {
        draft.friendSuggestion.forEach((sugg) => {
          if (sugg.id === sendFriendRequest.friend.id) {
            sugg.requested = true;
          }
        });
      }),
    });
  }
}

interface Return {
  submit: () => void;
  loading: boolean;
}

export const useSendFriendRequest = (
  variables: MutationSendFriendRequestArgs,
): Return => {
  const apollo = useApolloClient() as ApolloClient<Record<string, unknown>>;
  const [sendRequest, { loading }] = useMutation<
    SendFriendRequestData,
    MutationSendFriendRequestArgs
  >(SEND_FRIEND_REQUEST, {
    onCompleted({ sendFriendRequest }) {
      updateFriendSuggestion(apollo, sendFriendRequest);
    },
  });

  const submit = (): void => {
    sendRequest({ variables });
  };

  return {
    submit,
    loading,
  };
};
