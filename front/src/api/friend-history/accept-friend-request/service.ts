import { ACCEPT_FRIEND_REQUEST, AcceptFriendRequestData } from './gql';
import { ApolloCache, useMutation } from '@apollo/client';
import { FRIENDS, FriendsData } from '../../user/friends/gql';
import {
  FRIEND_REQUESTS,
  FriendRequestsData,
} from '../../user/friend-request/gql';
import { MutationAcceptFriendRequestArgs, User } from '../../types';

import produce from 'immer';

function updateFriendRequests(
  cache: ApolloCache<AcceptFriendRequestData>,
  userId,
): void {
  const prev = cache.readQuery<FriendRequestsData>({
    query: FRIEND_REQUESTS,
  });
  if (prev) {
    cache.writeQuery<FriendRequestsData>({
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

function udpateFriends(
  cache: ApolloCache<AcceptFriendRequestData>,
  newFriend: User,
): void {
  const prev =
    cache.readQuery<FriendsData>({ query: FRIENDS }) ||
    ({ friends: [] } as FriendsData);
  cache.writeQuery<FriendsData>({
    query: FRIENDS,
    data: produce(prev, (draft) => {
      draft.friends.unshift(newFriend);
    }),
  });
}

interface Return {
  submit: () => void;
  loading: boolean;
}

export const useAcceptFriendRequest = (
  variables: MutationAcceptFriendRequestArgs,
): Return => {
  const [accept, { loading }] = useMutation<
    AcceptFriendRequestData,
    MutationAcceptFriendRequestArgs
  >(ACCEPT_FRIEND_REQUEST, {
    update(cache, { data }) {
      if (data) {
        const senderId = data.acceptFriendRequest.user.id;
        updateFriendRequests(cache, senderId);
        udpateFriends(cache, data.acceptFriendRequest.user);
      }
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
