import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';

import { UserService } from '../../user/user.service';
import { PubSubService } from '../../utils/pubSub.service';
import { FriendHistory } from '../friend-history.entity';
import { FriendHistoryService } from '../friend-history.service';

const EVENT = 'acceptFriendRequestEvent';

@Resolver()
export class AcceptFriendRequestResolver {
  constructor(
    private userService: UserService,
    private friendHistoryService: FriendHistoryService,
    private pubSubService: PubSubService,
  ) {}

  @Mutation(() => FriendHistory)
  @UseGuards(GqlAuthGuard)
  async acceptFriendRequest(
    @CurrentUser() authPayload: AuthPayload,
    @Args('userId') userId: number,
  ): Promise<FriendHistory> {
    const user = await this.userService.getUserById(userId);
    const friend = await this.userService.getUserById(authPayload.payload.id);

    const friendRequest = await this.friendHistoryService.findByUserAndFriend(
      user,
      friend,
    );
    friendRequest.user = user;
    friendRequest.friend = friend;
    friendRequest.accepted = true;
    const result = await this.friendHistoryService.saveFriend(friendRequest);

    this.pubSubService.pubSub.publish(EVENT, result);

    // reverse friend relation
    const newFriend = new FriendHistory();
    newFriend.user = friend;
    newFriend.friend = user;
    newFriend.accepted = true;
    await this.friendHistoryService.saveFriend(newFriend);

    return result;
  }

  @Subscription(() => FriendHistory, {
    resolve: (pub: FriendHistory) => pub,
  })
  acceptFriendRequestEvent(): AsyncIterator<unknown, any, undefined> {
    return this.pubSubService.pubSub.asyncIterator(EVENT);
  }
}
