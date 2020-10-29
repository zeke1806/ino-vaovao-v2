import * as React from 'react';

import {
  DECLINE_FRIEND_REQUEST_EVENT,
  DeclineFriendRequestEventData,
} from '../../friend-history/decline-friend-request/event.gql';
import {
  FRIEND_SUGGESTION,
  FriendSuggestionData,
} from './friendSuggestion.gql';
import { ME, MeData } from '../me/me.gql';
import {
  SEND_FRIEND_REQUEST_EVENT,
  SendFriendRequestEventData,
} from '../../friend-history/send-friend-request/event.gql';
import { useApolloClient, useQuery } from '@apollo/client';

import produce from 'immer';

interface Return {
  loading: boolean;
  data: FriendSuggestionData | undefined;
  subscribeToSendFriendRequest: () => void;
  subscribeToDeclineFriendRequest: () => void;
}

export const useFriendSuggestion = (): Return => {
  const apollo = useApolloClient();

  const { loading, data, subscribeToMore } = useQuery<FriendSuggestionData>(
    FRIEND_SUGGESTION,
  );

  const subscribeToSendFriendRequest = (): void => {
    subscribeToMore<SendFriendRequestEventData>({
      document: SEND_FRIEND_REQUEST_EVENT,
      updateQuery: (prev, { subscriptionData }) => {
        const meData = apollo.cache.readQuery<MeData>({ query: ME });

        if (
          !subscriptionData.data ||
          !meData ||
          meData.me.id !==
            subscriptionData.data.sendFriendRequestEvent.friend.id
        ) {
          return prev;
        }

        const { sendFriendRequestEvent } = subscriptionData.data;
        return produce(prev, (draft) => {
          draft.friendSuggestion.splice(
            draft.friendSuggestion
              .map((sugg) => sugg.id)
              .indexOf(sendFriendRequestEvent.user.id),
            1,
          );
        });
      },
    });
  };

  const subscribeToDeclineFriendRequest = (): void => {
    subscribeToMore<DeclineFriendRequestEventData>({
      document: DECLINE_FRIEND_REQUEST_EVENT,
      updateQuery(prev, { subscriptionData }) {
        const meData = apollo.cache.readQuery<MeData>({ query: ME });

        if (
          !subscriptionData ||
          !meData ||
          meData.me.id !==
            subscriptionData.data.declineFriendRequestEvent.user.id
        ) {
          return prev;
        }
        return produce(prev, (draft) => {
          draft.friendSuggestion.forEach((sugg) => {
            if (
              sugg.id ===
              subscriptionData.data.declineFriendRequestEvent.friend.id
            ) {
              sugg.requested = false;
            }
          });
        });
      },
    });
  };

  return {
    loading,
    data,
    subscribeToSendFriendRequest,
    subscribeToDeclineFriendRequest,
  };
};
