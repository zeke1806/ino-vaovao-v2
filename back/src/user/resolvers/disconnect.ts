import { UseGuards } from '@nestjs/common';
import { Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { PubSubService } from '../../utils/pubSub.service';
import { User } from '../user.entity';
import { UserService } from '../user.service';

const EVENT = 'disconnectEvent';

@Resolver()
export class DisconnectResolver {
  constructor(
    private pubSubService: PubSubService,
    private userService: UserService,
  ) {}

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async disconnect(@CurrentUser() authPayload: AuthPayload): Promise<User> {
    const user = await this.userService.getUserById(authPayload.payload.id);
    user.statusConnected = false;

    this.pubSubService.pubSub.publish(EVENT, user);
    return user;
  }

  @Subscription(() => User, {
    resolve: (pub) => pub,
  })
  disconnectEvent(): AsyncIterator<unknown, any, undefined> {
    return this.pubSubService.pubSub.asyncIterator(EVENT);
  }
}
