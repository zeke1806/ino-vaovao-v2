import {
  ACCEPT_FRIEND_REQUEST_EVENT,
  AcceptFriendRequestEventData,
} from '../../friend-history/accept-friend-request/event.gql';
import { ApolloClient, useApolloClient, useQuery } from '@apollo/client';
import { FRIENDS, FriendsData } from './gql';
import { ME, MeData } from '../me/me.gql';

import produce from 'immer';

interface Return {
  data: FriendsData | undefined;
  loading: boolean;
  subscribeToAcceptFriendRequest: () => void;
}

export const useFriends = (): Return => {
  const { cache } = useApolloClient() as ApolloClient<Record<string, any>>;
  const { data, loading, subscribeToMore } = useQuery<FriendsData>(FRIENDS);

  const subscribeToAcceptFriendRequest = (): void => {
    subscribeToMore<AcceptFriendRequestEventData>({
      document: ACCEPT_FRIEND_REQUEST_EVENT,
      updateQuery: (prev, { subscriptionData }) => {
        const meData = cache.readQuery<MeData>({ query: ME });

        if (
          !subscriptionData ||
          !meData ||
          meData.me.id !==
            subscriptionData.data.acceptFriendRequestEvent.user.id
        ) {
          return prev;
        }

        return produce(prev, (draft) => {
          draft.friends.unshift(
            subscriptionData.data.acceptFriendRequestEvent.friend,
          );
        });
      },
    });
  };

  return {
    data,
    loading,
    subscribeToAcceptFriendRequest,
  };
};
