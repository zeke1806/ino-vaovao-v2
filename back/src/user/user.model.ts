import { InputType, Field } from '@nestjs/graphql';

import { User } from './user.entity';

@InputType()
export class CreateUserInput implements Partial<User> {
  @Field()
  username: string;

  @Field()
  password: string;
}
