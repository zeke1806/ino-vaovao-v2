import { ResolveField, Resolver, Root } from '@nestjs/graphql';
import { User } from '../../user/user.entity';
import { UserService } from '../../user/user.service';
import { Message } from '../message.entity';

@Resolver(() => Message)
export class MessageResolverField {
  constructor(private userService: UserService) {}

  @ResolveField(() => User)
  async sender(@Root() message: Message): Promise<User> {
    return this.userService.getUserById(message.senderId);
  }
}
