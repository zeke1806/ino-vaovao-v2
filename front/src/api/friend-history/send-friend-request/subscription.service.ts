import { ApolloClient, useApolloClient, useSubscription } from '@apollo/client';
import {
  FRIEND_REQUESTS,
  FriendRequestsData,
} from '../../user/friend-request/gql';
import { FriendHistory, User } from '../../types';
import { ME, MeData } from '../../user/me/me.gql';
import {
  SEND_FRIEND_REQUEST_EVENT,
  SendFriendRequestEventData,
} from './subscription.gql';

import produce from 'immer';

function updateFriendRequest(
  apollo: ApolloClient<Record<string, any>>,
  me: User,
  fh: FriendHistory,
): void {
  const prev =
    apollo.readQuery<FriendRequestsData>({ query: FRIEND_REQUESTS }) ||
    ({
      friendRequests: [],
    } as FriendRequestsData);

  if (me.id === fh.friend.id) {
    apollo.writeQuery<FriendRequestsData>({
      query: FRIEND_REQUESTS,
      data: produce(prev, (draft) => {
        draft.friendRequests.unshift(fh.user);
      }),
    });
  }
}

export const useSendFriendRequestEvent = (): void => {
  const apollo = useApolloClient() as ApolloClient<Record<string, any>>;
  const meData = apollo.readQuery<MeData>({ query: ME });

  useSubscription<SendFriendRequestEventData>(SEND_FRIEND_REQUEST_EVENT, {
    onSubscriptionData({ subscriptionData: { data } }) {
      if (data && meData) {
        updateFriendRequest(apollo, meData.me, data.sendFriendRequestEvent);
      }
    },
  });
};
