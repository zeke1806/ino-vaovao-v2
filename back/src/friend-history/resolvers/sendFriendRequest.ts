import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { FriendHistory, FriendHistoryStatus } from '../friend-history.entity';
import { UserService } from '../../user/user.service';
import { GqlAuthGuard, CurrentUser } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { FriendHistoryService } from '../friend-history.service';

@Resolver()
export class SendFriendRequestResolver {
  constructor(
    private userService: UserService,
    private friendHistoryService: FriendHistoryService,
  ) {}

  @Mutation(() => FriendHistory)
  @UseGuards(GqlAuthGuard)
  async sendFriendRequest(
    @Args('idFriend') idFriend: number,
    @CurrentUser() authPayload: AuthPayload,
  ): Promise<FriendHistory> {
    const user = await this.userService.getUserById(authPayload.payload.id);
    const friend = await this.userService.getUserById(idFriend);
    const isFriendHistoryExist = await this.friendHistoryService.getFriendHistoryByFriend(
      friend,
    );

    const friendHistory = isFriendHistoryExist || new FriendHistory();
    friendHistory.status = FriendHistoryStatus.Pending;
    friendHistory.user = user;
    friendHistory.friend = friend;

    return this.friendHistoryService.createOrUpdateFriendHistory(friendHistory);
  }
}
