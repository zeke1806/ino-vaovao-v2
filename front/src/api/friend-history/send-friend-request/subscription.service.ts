import {
  SEND_FRIEND_REQUEST_EVENT,
  SendFriendRequestEventData,
} from './subscription.gql';

import { useSubscription } from '@apollo/client';

export const useSendFriendRequestEvent = (): void => {
  useSubscription<SendFriendRequestEventData>(SEND_FRIEND_REQUEST_EVENT, {
    onSubscriptionData({ subscriptionData }) {
      console.log(subscriptionData);
    },
  });
};
