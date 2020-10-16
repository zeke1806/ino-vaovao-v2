import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { PubSubService } from '../../utils/pubSub.service';
import { UserService } from '../user.service';

const EVENT = 'connectEvent';
interface Publication {
  id: number;
  connected: boolean;
}

@Resolver()
export class ConnectResolver {
  constructor(
    private pubSubService: PubSubService,
    private userService: UserService
  ) { }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async connect(@CurrentUser() authPayload: AuthPayload): Promise<boolean> {
    const { payload: { id } } = authPayload;
    const user = await this.userService.getUserById(id);
    const pub: Publication = {
      id,
      connected: user.statusConnected
    };
    this.pubSubService.pubSub.publish(EVENT, pub);
    return user.statusConnected;
  }

  @Subscription(() => Boolean, {
    filter: (pub: Publication, vars: { id: number }) => {
      return pub.id === vars.id
    },

    resolve: (pub: Publication) => {
      return pub.connected;
    },
  })
  connectEvent(@Args('id') id: number): AsyncIterator<unknown, any, undefined> {
    return this.pubSubService.pubSub.asyncIterator(EVENT);
  }
}