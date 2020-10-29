import * as React from 'react';

import { FRIEND_REQUESTS, FriendRequestsData } from './gql';
import { ME, MeData } from '../me/me.gql';
import {
  SEND_FRIEND_REQUEST_EVENT,
  SendFriendRequestEventData,
} from '../../friend-history/send-friend-request/event.gql';
import { useApolloClient, useQuery } from '@apollo/client';

import produce from 'immer';

interface Return {
  data: FriendRequestsData | undefined;
  loading: boolean;
}

export const useFriendRequests = (): Return => {
  const apollo = useApolloClient();
  const meData = apollo.cache.readQuery<MeData>({ query: ME });

  const { data, loading, subscribeToMore } = useQuery<FriendRequestsData>(
    FRIEND_REQUESTS,
  );

  React.useEffect(() => {
    subscribeToMore<SendFriendRequestEventData>({
      document: SEND_FRIEND_REQUEST_EVENT,
      updateQuery: (prev, { subscriptionData }) => {
        if (
          !subscriptionData.data ||
          !meData ||
          meData.me.id !==
            subscriptionData.data.sendFriendRequestEvent.friend.id
        ) {
          return prev;
        }

        return produce(prev, (draft) => {
          draft.friendRequests.unshift(
            subscriptionData.data.sendFriendRequestEvent.user,
          );
        });
      },
    });
  }, []);

  return {
    data,
    loading,
  };
};
