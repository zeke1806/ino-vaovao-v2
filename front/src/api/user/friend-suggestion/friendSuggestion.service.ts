import * as React from 'react';

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
}

export const useFriendSuggestion = (): Return => {
  const apollo = useApolloClient();
  const meData = apollo.cache.readQuery<MeData>({ query: ME });

  const { loading, data, subscribeToMore } = useQuery<FriendSuggestionData>(
    FRIEND_SUGGESTION,
  );

  const subscribeToSendFriendRequest = (): void => {
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

  return {
    loading,
    data,
    subscribeToSendFriendRequest,
  };
};
