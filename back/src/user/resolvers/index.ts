import { RegisterResolver } from './register';
import { UpdateAccountResolver } from './updateAccount';
import { MeResolver } from './me';

export const UserResolvers = [
  RegisterResolver,
  UpdateAccountResolver,
  MeResolver,
];
