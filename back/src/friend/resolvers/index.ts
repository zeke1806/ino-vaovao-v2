import { AcceptFriendRequestResolver } from './acceptFriendRequest';
import { SendFriendRequestResolver } from './sendFriendRequest';

export const FriendHistoryResolvers = [
  SendFriendRequestResolver,
  AcceptFriendRequestResolver
];
