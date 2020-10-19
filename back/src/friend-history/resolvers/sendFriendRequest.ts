import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';

import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { UserService } from '../../user/user.service';
import { PubSubService } from '../../utils/pubSub.service';
import { FriendHistory } from '../friend-history.entity';
import { FriendHistoryService } from '../friend-history.service';

const EVENT = 'sendFriendRequestEvent';

@Resolver()
export class SendFriendRequestResolver {
  constructor(
    private userService: UserService,
    private friendHistoryService: FriendHistoryService,
    private pubSubService: PubSubService,
  ) {}

  @Mutation(() => FriendHistory)
  @UseGuards(GqlAuthGuard)
  async sendFriendRequest(
    @CurrentUser() authPayload: AuthPayload,
    @Args('friendId') friendId: number,
  ): Promise<FriendHistory> {
    const user = await this.userService.getUserById(authPayload.payload.id);
    const friend = await this.userService.getUserById(friendId);

    const newFriendRequest = new FriendHistory();
    newFriendRequest.user = user;
    newFriendRequest.friend = friend;
    newFriendRequest.accepted = false;
    const result = await this.friendHistoryService.saveFriend(newFriendRequest);

    this.pubSubService.pubSub.publish(EVENT, result);

    return result;
  }

  @Subscription(() => FriendHistory, {
    resolve: (pub: FriendHistory) => pub,
  })
  sendFriendRequestEvent(): AsyncIterator<unknown, any, undefined> {
    return this.pubSubService.pubSub.asyncIterator(EVENT);
  }
}
