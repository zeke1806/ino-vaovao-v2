import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { FriendHistoryService } from '../../friend-history/friend-history.service';
import { User } from '../user.entity';
import { UserService } from '../user.service';

@Resolver()
export class FriendRequestsResolver {
  constructor(
    private userService: UserService,
    private friendHistoryService: FriendHistoryService,
  ) {}

  @Query(() => [User])
  @UseGuards(GqlAuthGuard)
  async friendRequests(
    @CurrentUser() authPayload: AuthPayload,
  ): Promise<User[]> {
    const requests = await this.friendHistoryService
      .createUsersWhoSentMeARequestIdQB(authPayload.payload.id)
      .getRawMany<{ user: number }>();

    return Promise.all(requests.map(f => this.userService.getUserById(f.user)));
  }
}
