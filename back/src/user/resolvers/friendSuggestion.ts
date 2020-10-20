import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';

import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { FriendHistoryService } from '../../friend-history/friend-history.service';
import { User } from '../user.entity';
import { UserService } from '../user.service';

@Resolver()
export class FriendSuggestionResolver {
  constructor(
    private userService: UserService,
    private friendHistoryService: FriendHistoryService,
  ) {}

  @Query(() => [User])
  @UseGuards(GqlAuthGuard)
  async friendSuggestion(
    @CurrentUser() authPayload: AuthPayload,
  ): Promise<User[]> {
    const friends = await this.friendHistoryService.getFriends(
      authPayload.payload.id,
    );
    return this.userService.friendSuggestion(friends, authPayload.payload.id);
  }
}
