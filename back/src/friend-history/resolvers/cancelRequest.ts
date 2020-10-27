import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { UserService } from '../../user/user.service';
import { FriendHistoryService } from '../friend-history.service';

@Resolver()
export class CancelRequestResolver {
  constructor(
    private userService: UserService,
    private friendHistoryService: FriendHistoryService,
  ) {}

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async cancelRequest(
    @CurrentUser() authPayload: AuthPayload,
    @Args('friendId') friendId: number,
  ): Promise<boolean> {
    const user = await this.userService.getUserById(authPayload.payload.id);
    const friend = await this.userService.getUserById(friendId);

    const friendRequest = await this.friendHistoryService.findByUserAndFriend(
      user,
      friend,
    );
    friendRequest.user = user;
    friendRequest.friend = friend;
    const removedFriendRequest = await this.friendHistoryService.removeFriend(
      friendRequest,
    );

    return removedFriendRequest && true;
  }
}
