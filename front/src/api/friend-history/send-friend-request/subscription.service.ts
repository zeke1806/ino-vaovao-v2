import { ApolloClient, useApolloClient, useSubscription } from '@apollo/client';
import {
  FRIEND_REQUESTS,
  FriendRequestsData,
} from '../../user/friend-request/gql';
import {
  FRIEND_SUGGESTION,
  FriendSuggestionData,
} from '../../user/friend-suggestion/friendSuggestion.gql';
import { FriendHistory, User } from '../../types';
import { ME, MeData } from '../../user/me/me.gql';
import {
  SEND_FRIEND_REQUEST_EVENT,
  SendFriendRequestEventData,
} from './subscription.gql';

import produce from 'immer';

function updateFriendRequest(
  apollo: ApolloClient<Record<string, any>>,
  fh: FriendHistory,
): void {
  const prev =
    apollo.cache.readQuery<FriendRequestsData>({ query: FRIEND_REQUESTS }) ||
    ({
      friendRequests: [],
    } as FriendRequestsData);

  apollo.cache.writeQuery<FriendRequestsData>({
    query: FRIEND_REQUESTS,
    data: produce(prev, (draft) => {
      draft.friendRequests.unshift(fh.user);
    }),
  });
}

function updateFriendSuggestion(
  apollo: ApolloClient<Record<string, any>>,
  fh: FriendHistory,
): void {
  const prev =
    apollo.cache.readQuery<FriendSuggestionData>({
      query: FRIEND_SUGGESTION,
    }) ||
    ({
      friendSuggestion: [],
    } as FriendSuggestionData);

  apollo.cache.writeQuery<FriendSuggestionData>({
    query: FRIEND_SUGGESTION,
    data: produce(prev, (draft) => {
      draft.friendSuggestion.length &&
        draft.friendSuggestion.splice(
          draft.friendSuggestion.map((sugg) => sugg.id).indexOf(fh.user.id),
          1,
        );
    }),
  });
}

export const useSendFriendRequestEvent = (): void => {
  const apollo = useApolloClient() as ApolloClient<Record<string, any>>;

  useSubscription<SendFriendRequestEventData>(SEND_FRIEND_REQUEST_EVENT, {
    onSubscriptionData({ subscriptionData: { data } }) {
      const meData = apollo.readQuery<MeData>({ query: ME });
      if (
        data &&
        meData &&
        meData.me.id === data.sendFriendRequestEvent.friend.id
      ) {
        updateFriendRequest(apollo, data.sendFriendRequestEvent);
        updateFriendSuggestion(apollo, data.sendFriendRequestEvent);
      }
    },
  });
};
