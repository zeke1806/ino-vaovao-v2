import { InputType, Field, ObjectType, createUnionType } from '@nestjs/graphql';

import { User } from './user.entity';

// Register

@InputType()
export class RegisterInput implements Partial<User> {
  @Field()
  username: string;

  @Field()
  password: string;
}

@ObjectType()
export class RegisterError {
  @Field({ nullable: true })
  fieldEmpty?: string;

  @Field({ nullable: true })
  usernameNotAvailable?: string;
}

export const RegisterResult = createUnionType({
  name: 'RegisterResult',
  types: () => [User, RegisterError],
  resolveType: (value: User | RegisterError) => {
    if (value instanceof User) return 'User';
    if (value instanceof RegisterError) return 'RegisterError';
    return null;
  },
});

// Fin Register

// UpdateAccount

@InputType()
export class UpdateAccountInput implements Partial<User> {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  statusConnected: boolean;
}

@ObjectType()
export class UpdateAccountError {
  @Field({ nullable: true })
  usernameNotAvailable?: string;

  @Field({ nullable: true })
  cannotUpdateTheSameInfo?: string;
}

export const UpdateAccountResult = createUnionType({
  name: 'UpdateAccountResult',
  types: () => [UpdateAccountError, User],
  resolveType: (value: User | UpdateAccountError) => {
    if (value instanceof User) return 'User';
    if (value instanceof UpdateAccountError) return 'UpdateAccountError';
    return null;
  },
});

// Fin UpdateAccount
