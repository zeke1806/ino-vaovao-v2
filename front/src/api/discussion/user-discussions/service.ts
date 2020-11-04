/* eslint-disable @typescript-eslint/indent */
import * as React from 'react';

import {
  SEND_MESSAGE_EVENT,
  SendMessageEventData,
  SendMessageEventVariables,
} from '../../message/send-message/event.gql';
import { SubscribeToMoreOptions, useLazyQuery } from '@apollo/client';
import { USER_DISCUSSIONS, UserDiscussionsData } from './gql';

import { DiscussionLastMessageArgs } from '../../types';
import produce from 'immer';
import { useMe } from '../../user/me/me.service';

type SubscribeToMore =
  | (<
      TSubscriptionData = UserDiscussionsData,
      TSubscriptionVariables = DiscussionLastMessageArgs
    >(
      options: SubscribeToMoreOptions<
        UserDiscussionsData,
        TSubscriptionVariables,
        TSubscriptionData
      >,
    ) => () => void)
  | undefined;

interface Return {
  data: UserDiscussionsData | undefined;
  loading: boolean;
  subscribeToMore: SubscribeToMore;
  subscribeToSendMessageEvent: (
    variables: SendMessageEventVariables,
    subscribeToMore: SubscribeToMore,
  ) => void;
}

export const useUserDiscussions = (): Return => {
  const { meData } = useMe();
  const [getUserDiscussions, { data, loading, subscribeToMore }] = useLazyQuery<
    UserDiscussionsData,
    DiscussionLastMessageArgs
  >(USER_DISCUSSIONS, {
    fetchPolicy: 'cache-and-network',
  });

  React.useEffect(() => {
    if (meData) {
      getUserDiscussions({
        variables: {
          clientId: meData.me.id,
        },
      });
    }
  }, [meData?.me.id]);

  const subscribeToSendMessageEvent = (
    variables: SendMessageEventVariables,
    subscribeToMore: SubscribeToMore,
  ): void => {
    if (subscribeToMore && meData) {
      subscribeToMore<SendMessageEventData, SendMessageEventVariables>({
        document: SEND_MESSAGE_EVENT,
        variables,
        updateQuery(prev, { subscriptionData }) {
          if (!subscriptionData) return prev;
          const {
            data: { sendMessageEvent },
          } = subscriptionData;
          return produce(prev, (draft) => {
            const index = draft.userDiscussions.findIndex(
              (d) => d.id === sendMessageEvent.id,
            );
            if (index === -1) {
              draft.userDiscussions.push(sendMessageEvent);
            } else {
              draft.userDiscussions[index] = sendMessageEvent;
            }
          });
        },
      });
    }
  };

  return {
    data,
    loading,
    subscribeToMore,
    subscribeToSendMessageEvent,
  };
};
