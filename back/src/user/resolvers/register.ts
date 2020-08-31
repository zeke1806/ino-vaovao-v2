import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { User } from '../user.entity';
import { CreateUserInput } from '../user.model';

@Resolver()
export class RegisterResolver {
  @Mutation(() => User)
  async register(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return;
  }
}
