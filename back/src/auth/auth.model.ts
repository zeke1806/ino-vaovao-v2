import { InputType, Field, createUnionType, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.entity';

export interface Payload {
  id: number;
}

export interface AuthPayload {
  payload: Payload;
  iat: number;
  exp: number;
}

@InputType()
export class LoginInput implements Partial<User> {
  @Field()
  username: string;

  @Field()
  password: string;
}

@ObjectType()
export class LoginError {
  @Field()
  incorrectInfo: string;
}

@ObjectType()
export class LoginToken {
  @Field()
  token: string;
}

export const LoginResult = createUnionType({
  name: 'LoginResult',
  types: () => [LoginError, LoginToken],
  resolveType: (value: LoginError | LoginToken) => {
    if (value instanceof LoginError) return 'LoginError';
    if (value instanceof LoginToken) return 'LoginToken';
    return null;
  },
});
