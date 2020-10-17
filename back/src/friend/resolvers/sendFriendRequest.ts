import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';

import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { UserService } from '../../user/user.service';
import { PubSubService } from '../../utils/pubSub.service';
import { Friend } from '../friend.entity';
import { FriendService } from '../friend.service';

const EVENT = 'sendFriendRequestEvent';

@Resolver()
export class SendFriendRequestResolver {
  constructor(
    private userService: UserService,
    private friendService: FriendService,
    private pubSubService: PubSubService,
  ) {}

  @Mutation(() => Friend)
  @UseGuards(GqlAuthGuard)
  async sendFriendRequest(
    @CurrentUser() authPayload: AuthPayload,
    @Args('friendId') friendId: number,
  ): Promise<Friend> {
    const user = await this.userService.getUserById(authPayload.payload.id);
    const friend = await this.userService.getUserById(friendId);

    const newFriendRequest = new Friend();
    newFriendRequest.user = user;
    newFriendRequest.friend = friend;
    newFriendRequest.accepted = false;
    const result = await this.friendService.saveFriend(newFriendRequest);

    this.pubSubService.pubSub.publish(EVENT, result);

    return result;
  }

  @Subscription(() => Friend, {
    resolve: (pub: Friend) => pub,
  })
  sendFriendRequestEvent(): AsyncIterator<unknown, any, undefined> {
    return this.pubSubService.pubSub.asyncIterator(EVENT);
  }
}
