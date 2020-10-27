import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { FriendHistory } from '../../friend-history/friend-history.entity';

import { FriendHistoryService } from '../../friend-history/friend-history.service';
import { User } from '../user.entity';
import { UserService } from '../user.service';

@Resolver()
export class FriendsResolver {
  constructor(
    private userService: UserService,
    private friendHistoryService: FriendHistoryService,
  ) {}

  @Query(() => [User])
  @UseGuards(GqlAuthGuard)
  async friends(@CurrentUser() authPayload: AuthPayload): Promise<User[]> {
    const friendsId = (
      await this.friendHistoryService
        .createFriendsIdQB(authPayload.payload.id)
        .getRawMany<Pick<FriendHistory, 'friend'>>()
    ).map(fh => (fh.friend as unknown) as number);

    return Promise.all(
      friendsId.map(async fId => this.userService.getUserById(fId)),
    );
  }
}
