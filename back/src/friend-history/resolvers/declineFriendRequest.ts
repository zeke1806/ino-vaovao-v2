import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { UserService } from '../../user/user.service';
import { PubSubService } from '../../utils/pubSub.service';
import { FriendHistory } from '../friend-history.entity';
import { FriendHistoryService } from '../friend-history.service';

const EVENT = 'declineFriendRequestEvent';

@Resolver()
export class DeclineFriendRequestResolver {
  constructor(
    private userService: UserService,
    private friendHistoryService: FriendHistoryService,
    private pubSubService: PubSubService,
  ) {}

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async declineFriendRequest(
    @CurrentUser() authPayload: AuthPayload,
    @Args('userId') userId: number,
  ): Promise<boolean> {
    const user = await this.userService.getUserById(userId);
    const friend = await this.userService.getUserById(authPayload.payload.id);

    const friendRequest = await this.friendHistoryService.findByUserAndFriend(
      user,
      friend,
    );
    friendRequest.user = user;
    friendRequest.friend = friend;
    const removedFriendRequest = await this.friendHistoryService.removeFriend(
      friendRequest,
    );

    this.pubSubService.pubSub.publish(EVENT, {
      user: {
        id: removedFriendRequest.userId,
      },
      friend: {
        id: removedFriendRequest.friendId,
      },
    } as FriendHistory);

    return removedFriendRequest && true;
  }

  @Subscription(() => FriendHistory, {
    resolve: (pub: FriendHistory) => pub,
  })
  declineFriendRequestEvent(): AsyncIterator<unknown, any, undefined> {
    return this.pubSubService.pubSub.asyncIterator(EVENT);
  }
}
