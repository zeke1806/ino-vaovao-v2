import { RegisterResolver } from './register';
import { UpdateAccountResolver } from './updateAccount';
import { MeResolver } from './me';
import { ConnectResolver } from './connect';
import { DisconnectResolver } from './disconnect';
import { FriendSuggestionResolver } from './friendSuggestion';
import { FriendRequestsResolver } from './friendRequests';

export const UserResolvers = [
  RegisterResolver,
  UpdateAccountResolver,
  MeResolver,
  ConnectResolver,
  DisconnectResolver,
  FriendSuggestionResolver,
  FriendRequestsResolver,
];
