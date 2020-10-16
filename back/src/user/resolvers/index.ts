import { RegisterResolver } from './register';
import { UpdateAccountResolver } from './updateAccount';
import { MeResolver } from './me';
import { ConnectResolver } from './connect';
import { DisconnectResolver } from './disconnect';

export const UserResolvers = [
  RegisterResolver,
  UpdateAccountResolver,
  MeResolver,
  ConnectResolver,
  DisconnectResolver
];
