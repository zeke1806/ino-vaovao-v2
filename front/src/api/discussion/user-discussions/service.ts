import * as React from 'react';

import {
  SEND_MESSAGE_EVENT,
  SendMessageEventData,
  SendMessageEventVariables,
} from '../../message/send-message/event.gql';
import { USER_DISCUSSIONS, UserDiscussionsData } from './gql';

import { DiscussionLastMessageArgs } from '../../types';
import { useLazyQuery } from '@apollo/client';
import { useMe } from '../../user/me/me.service';

interface Return {
  data: UserDiscussionsData | undefined;
  loading: boolean;
  subscribeToSendMessageEvent: (variables: SendMessageEventVariables) => void;
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
  ): void => {
    if (subscribeToMore) {
      subscribeToMore<SendMessageEventData, SendMessageEventVariables>({
        document: SEND_MESSAGE_EVENT,
        variables,
      });
    }
  };

  return {
    data,
    loading,
    subscribeToSendMessageEvent,
  };
};
