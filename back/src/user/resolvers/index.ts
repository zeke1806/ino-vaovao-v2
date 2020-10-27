import { ConnectResolver } from './connect';
import { DisconnectResolver } from './disconnect';
import { FriendRequestsResolver } from './friendRequests';
import { FriendSuggestionResolver } from './friendSuggestion';
import { FriendsResolver } from './friends';
import { MeResolver } from './me';
import { RegisterResolver } from './register';
import { UpdateAccountResolver } from './updateAccount';

export const UserResolvers = [
  RegisterResolver,
  UpdateAccountResolver,
  MeResolver,
  ConnectResolver,
  DisconnectResolver,
  FriendSuggestionResolver,
  FriendRequestsResolver,
  FriendsResolver,
];
