import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AffectUsersToDiscussionInput } from '../discussion-user.types';
import { DiscussionUserService } from '../discussion-user.service';
import { UserService } from '../../user/user.service';
import { DiscussionService } from '../../discussion/discussion.service';
import { DiscussionUser } from '../discussion-user.entity';

@Resolver()
export class AffectUsersToDiscussionResolver {
  constructor(
    private discussionUserService: DiscussionUserService,
    private userService: UserService,
    private discussionService: DiscussionService,
  ) {}

  @Mutation(() => Boolean)
  async affectUsersToDiscussion(
    @Args('affectData') data: AffectUsersToDiscussionInput,
  ): Promise<boolean> {
    const { usersId, discussionId } = data;
    const discussion = await this.discussionService.getDiscussionById(
      discussionId,
    );

    await Promise.all(
      usersId.map(async userId => {
        const discussionUser = new DiscussionUser();
        discussionUser.discussion = discussion;
        discussionUser.user = await this.userService.getUserById(userId);
        return this.discussionUserService.saveDiscussionUser(discussionUser);
      }),
    );

    return true;
  }
}
