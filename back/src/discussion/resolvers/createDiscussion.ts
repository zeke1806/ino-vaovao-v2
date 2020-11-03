import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { DiscussionUser } from '../../discussion-user/discussion-user.entity';
import { DiscussionUserService } from '../../discussion-user/discussion-user.service';
import { UserService } from '../../user/user.service';
import { Discussion } from '../discussion.entity';
import { DiscussionService } from '../discussion.service';
import { CreateDiscussionInput } from '../discussion.types';

@Resolver()
export class CreateDiscussionResolver {
  constructor(
    private discussionService: DiscussionService,
    private discussionUserService: DiscussionUserService,
    private userService: UserService,
  ) {}

  @Mutation(() => Discussion)
  @UseGuards(GqlAuthGuard)
  async createDiscussion(
    @Args('data') { name, members }: CreateDiscussionInput,
    @CurrentUser() { payload }: AuthPayload,
  ): Promise<Discussion> {
    let discussion = new Discussion();
    discussion.name = name;
    discussion.creator = await this.userService.getUserById(payload.id);
    discussion = await this.discussionService.saveDiscussion(discussion);

    discussion.members = await Promise.all(
      members.map(async id => {
        const user = await this.userService.getUserById(id);
        const discussionUser = new DiscussionUser();
        discussionUser.discussion = discussion;
        discussionUser.user = user;
        if (payload.id === id) discussionUser.creator = true;
        await this.discussionUserService.saveDiscussionUser(discussionUser);
        return user;
      }),
    );

    return discussion;
  }
}
