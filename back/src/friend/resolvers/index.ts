import { AcceptFriendRequestResolver } from './acceptFriendRequest';
import { DeclineFriendRequestResolver } from './declineFriendRequest';
import { SendFriendRequestResolver } from './sendFriendRequest';

export const FriendHistoryResolvers = [
  SendFriendRequestResolver,
  AcceptFriendRequestResolver,
  DeclineFriendRequestResolver,
];
