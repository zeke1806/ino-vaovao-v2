import { AcceptFriendRequestResolver } from './acceptFriendRequest';
import { CancelRequestResolver } from './cancelRequest';
import { DeclineFriendRequestResolver } from './declineFriendRequest';
import { SendFriendRequestResolver } from './sendFriendRequest';

export const FriendHistoryResolvers = [
  SendFriendRequestResolver,
  AcceptFriendRequestResolver,
  DeclineFriendRequestResolver,
  CancelRequestResolver,
];
