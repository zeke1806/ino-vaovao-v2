import { ApolloClient, useApolloClient, useMutation } from '@apollo/client';
import { DECLINE_FRIEND_REQUEST, DeclineFriendRequestData } from './gql';
import {
  FRIEND_REQUESTS,
  FriendRequestsData,
} from '../../user/friend-request/gql';

import { MutationDeclineFriendRequestArgs } from '../../types';
import produce from 'immer';

function updateFriendRequests(
  apollo: ApolloClient<Record<string, any>>,
  userId: number,
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
  loading: boolean;
  submit: () => void;
}

export const useDeclineFriendRequest = (
  variables: MutationDeclineFriendRequestArgs,
): Return => {
  const apollo = useApolloClient() as ApolloClient<Record<string, any>>;
  const [decline, { loading }] = useMutation<
    DeclineFriendRequestData,
    MutationDeclineFriendRequestArgs
  >(DECLINE_FRIEND_REQUEST, {
    onCompleted({ declineFriendRequest }) {
      if (declineFriendRequest) {
        updateFriendRequests(apollo, variables.userId);
      }
    },
  });

  const submit = (): void => {
    decline({ variables });
  };

  return {
    loading,
    submit,
  };
};
