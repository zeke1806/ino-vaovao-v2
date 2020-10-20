import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { UserService } from '../../user/user.service';

import { Discussion } from '../discussion.entity';
import { DiscussionService } from '../discussion.service';
import { SaveDiscussionInput } from '../discussion.types';

@Resolver()
export class SaveDiscussionResolver {
  constructor(
    private discussionService: DiscussionService,
    private userService: UserService,
  ) {}

  @Mutation(() => Discussion)
  @UseGuards(GqlAuthGuard)
  async saveDiscussion(
    @CurrentUser() authPayload: AuthPayload,
    @Args('discussionData') data: SaveDiscussionInput,
  ): Promise<Discussion> {
    const { id, name } = data;

    const discussion = id
      ? await this.discussionService.getDiscussionById(id)
      : new Discussion();

    if (name) discussion.name = name;
    discussion.creator = (
      await this.userService.getUserById(authPayload.payload.id)
    ).username;

    return this.discussionService.saveDiscussion(discussion);
  }
}
