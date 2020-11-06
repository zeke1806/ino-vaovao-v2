import * as React from 'react';

import {
  SEND_MESSAGE_EVENT,
  SendMessageEventData,
  SendMessageEventVariables,
} from './event.gql';

import { useMe } from '../../user/me/me.service';
import { useSubscription } from '@apollo/client';

type Return = SendMessageEventData | undefined;

export const useSendMessageEvent = (
  variables: SendMessageEventVariables,
): Return => {
  const { data } = useSubscription<
    SendMessageEventData,
    SendMessageEventVariables
  >(SEND_MESSAGE_EVENT, {
    variables,
  });

  return data;
};

export const useNotificationSound = (): void => {
  const { meData } = useMe();
  const varsId = meData ? meData.me.id : 0;
  const data = useSendMessageEvent({ clientId: varsId, userId: varsId });

  React.useEffect(() => {
    if (data) {
      console.log('play sound');
    }
  }, [data]);
};
