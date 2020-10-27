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
    const friendsIdQB = this.friendHistoryService.createFriendsIdQB(
      authPayload.payload.id,
    );
    const friendsWhoSentMeARequestIdQB = this.friendHistoryService.createUsersWhoSentMeARequestIdQB(
      authPayload.payload.id,
    );
    const suggestions = await this.userService.friendSuggestion(
      authPayload.payload.id,
      friendsIdQB,
      friendsWhoSentMeARequestIdQB,
    );

    const usersISentARequestId = (
      await this.friendHistoryService
        .createUsersISentARequestIdQB(authPayload.payload.id)
        .getRawMany<{ friend: number }>()
    ).map(fh => fh.friend);

    return suggestions.map(sugg => {
      if (usersISentARequestId.includes(sugg.id)) {
        sugg.requested = true;
      }
      return sugg;
    });
  }
}
