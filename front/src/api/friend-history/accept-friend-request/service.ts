import { ACCEPT_FRIEND_REQUEST, AcceptFriendRequestData } from './gql';
import { ApolloClient, useApolloClient, useMutation } from '@apollo/client';
import {
  FRIEND_REQUESTS,
  FriendRequestsData,
} from '../../user/friend-request/gql';

import { MutationAcceptFriendRequestArgs } from '../../types';
import produce from 'immer';

function updateFriendRequests(
  apollo: ApolloClient<Record<string, any>>,
  userId,
): void {
  const prev = apollo.readQuery<FriendRequestsData>({
    query: FRIEND_REQUESTS,
  });
  if (prev) {
    apollo.writeQuery<FriendRequestsData>({
      query: FRIEND_REQUESTS,
      data: produce(prev, (draft) => {
        draft.friendRequests.splice(
          draft.friendRequests.map((fr) => fr.id).indexOf(userId),
          1,
        );
      }),
    });
  }
}

interface Return {
  submit: () => void;
  loading: boolean;
}

export const useAcceptFriendRequest = (
  variables: MutationAcceptFriendRequestArgs,
): Return => {
  const apollo = useApolloClient() as ApolloClient<Record<string, any>>;
  const [accept, { loading }] = useMutation<
    AcceptFriendRequestData,
    MutationAcceptFriendRequestArgs
  >(ACCEPT_FRIEND_REQUEST, {
    onCompleted({ acceptFriendRequest }) {
      const senderId = acceptFriendRequest.user;
      updateFriendRequests(apollo, senderId);
    },
  });

  const submit = (): void => {
    accept({ variables });
  };

  return {
    submit,
    loading,
  };
};
