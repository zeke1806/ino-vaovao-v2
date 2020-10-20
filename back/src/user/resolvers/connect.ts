import { Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { PubSubService } from '../../utils/pubSub.service';
import { UserService } from '../user.service';
import { User } from '../user.entity';

const EVENT = 'connectEvent';

@Resolver()
export class ConnectResolver {
  constructor(
    private pubSubService: PubSubService,
    private userService: UserService,
  ) {}

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async connect(@CurrentUser() authPayload: AuthPayload): Promise<User> {
    const {
      payload: { id },
    } = authPayload;
    const user = await this.userService.getUserById(id);
    user.statusConnected = user.statusConnected || false;

    this.pubSubService.pubSub.publish(EVENT, user);
    return user;
  }

  @Subscription(() => User, {
    resolve: (pub) => pub,
  })
  connectEvent(): AsyncIterator<unknown, any, undefined> {
    return this.pubSubService.pubSub.asyncIterator(EVENT);
  }
}
