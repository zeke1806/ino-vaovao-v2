import { ApolloCache, useMutation } from '@apollo/client';
import { DECLINE_FRIEND_REQUEST, DeclineFriendRequestData } from './gql';
import {
  FRIEND_REQUESTS,
  FriendRequestsData,
} from '../../user/friend-request/gql';
import { MutationDeclineFriendRequestArgs, User } from '../../types';

import produce from 'immer';

function updateFriendRequests(
  cache: ApolloCache<DeclineFriendRequestData>,
  userId: number,
): User[] {
  const prev =
    cache.readQuery<FriendRequestsData>({
      query: FRIEND_REQUESTS,
    }) || ({ friendRequests: [] } as FriendRequestsData);
  return produce(prev.friendRequests, (draft) => {
    draft.splice(draft.map((fr) => fr.id).indexOf(userId), 1);
  });
}

interface Return {
  loading: boolean;
  submit: () => void;
}

export const useDeclineFriendRequest = (
  variables: MutationDeclineFriendRequestArgs,
): Return => {
  const [decline, { loading }] = useMutation<
    DeclineFriendRequestData,
    MutationDeclineFriendRequestArgs
  >(DECLINE_FRIEND_REQUEST, {
    update(cache, { data }) {
      if (data && data.declineFriendRequest) {
        cache.modify({
          fields: {
            friendRequests(): User[] {
              return updateFriendRequests(cache, variables.userId);
            },
          },
        });
        updateFriendRequests(cache, variables.userId);
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
