import { RegisterResolver } from './register';
import { UpdateAccountResolver } from './updateAccount';
import { MeResolver } from './me';
import { ConnectResovler } from './connect';

export const UserResolvers = [
  RegisterResolver,
  UpdateAccountResolver,
  MeResolver,
  ConnectResovler
];
