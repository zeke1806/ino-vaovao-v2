import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { DiscussionUser } from '../../discussion-user/discussion-user.entity';
import { DiscussionUserService } from '../../discussion-user/discussion-user.service';
import { UserService } from '../../user/user.service';
import { Discussion } from '../discussion.entity';
import { DiscussionService } from '../discussion.service';
import { SaveDiscussionInput } from '../discussion.types';

@Resolver()
export class SaveDiscussionResolver {
  constructor(
    private discussionService: DiscussionService,
    private userService: UserService,
    private discussionUserService: DiscussionUserService,
  ) {}

  @Mutation(() => Discussion)
  @UseGuards(GqlAuthGuard)
  async saveDiscussion(
    @CurrentUser() authPayload: AuthPayload,
    @Args('discussionData') data: SaveDiscussionInput,
  ): Promise<Discussion> {
    const creator = await this.userService.getUserById(authPayload.payload.id);
    const { id, name } = data;

    const discussion = id
      ? await this.discussionService.getDiscussionById(id)
      : new Discussion();
    if (name) discussion.name = name;
    const savedDiscussion = await this.discussionService.saveDiscussion(
      discussion,
    );

    const discussionUser = new DiscussionUser();
    discussionUser.discussion = savedDiscussion;
    discussionUser.user = creator;
    discussionUser.creator = true;
    await this.discussionUserService.saveDiscussionUser(discussionUser);

    return savedDiscussion;
  }
}
