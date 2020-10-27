import { useSendFriendRequestEvent } from './friend-history/send-friend-request/subscription.service';

export const useGlobalSubscription = (): void => {
  useSendFriendRequestEvent();
};
