import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { DiscussionUserService } from '../../discussion-user/discussion-user.service';
import { UserService } from '../../user/user.service';

import { Discussion } from '../discussion.entity';
import { DiscussionService } from '../discussion.service';

@Resolver()
export class UserDiscussionsResolver {
  constructor(
    private discussionService: DiscussionService,
    private discussionUserService: DiscussionUserService,
    private userService: UserService,
  ) {}

  @Query(() => [Discussion])
  @UseGuards(GqlAuthGuard)
  async userDiscussions(
    @CurrentUser() { payload }: AuthPayload,
  ): Promise<Discussion[]> {
    const user = await this.userService.getUserById(payload.id);
    const userDiscussions = [
      ...new Set(
        (await this.discussionUserService.getUserDiscussions(user)).map(
          ud => ud.discussionId,
        ),
      ),
    ];

    return Promise.all(
      userDiscussions.map(async id => {
        return this.discussionService.getDiscussionById(id);
      }),
    );
  }
}
