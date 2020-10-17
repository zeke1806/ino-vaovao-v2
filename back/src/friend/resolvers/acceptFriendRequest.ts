import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';

import { UserService } from '../../user/user.service';
import { PubSubService } from '../../utils/pubSub.service';
import { Friend } from '../friend.entity';
import { FriendService } from '../friend.service';

const EVENT = 'acceptFriendRequestEvent';

@Resolver()
export class AcceptFriendRequestResolver {
  constructor(
    private userService: UserService,
    private friendService: FriendService,
    private pubSubService: PubSubService,
  ) {}

  @Mutation(() => Friend)
  @UseGuards(GqlAuthGuard)
  async acceptFriendRequest(
    @CurrentUser() authPayload: AuthPayload,
    @Args('userId') userId: number,
  ): Promise<Friend> {
    const user = await this.userService.getUserById(userId);
    const friend = await this.userService.getUserById(authPayload.payload.id);

    const friendRequest = await this.friendService.findByUserAndFriend(
      user,
      friend,
    );
    friendRequest.user = user;
    friendRequest.friend = friend;
    friendRequest.accepted = true;
    const result = await this.friendService.saveFriend(friendRequest);

    this.pubSubService.pubSub.publish(EVENT, result);

    // reverse friend relation
    const newFriend = new Friend();
    newFriend.user = friend;
    newFriend.friend = user;
    newFriend.accepted = true;
    await this.friendService.saveFriend(newFriend);

    return result;
  }

  @Subscription(() => Friend, {
    resolve: (pub: Friend) => pub,
  })
  acceptFriendRequestEvent(): AsyncIterator<unknown, any, undefined> {
    return this.pubSubService.pubSub.asyncIterator(EVENT);
  }
}
