import { InputType, Field, ObjectType, createUnionType } from '@nestjs/graphql';

import { User } from './user.entity';

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
