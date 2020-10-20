import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Discussion } from '../discussion.entity';

import { DiscussionService } from '../discussion.service';

@Resolver()
export class RemoveDiscussionResolver {
  constructor(private discussionService: DiscussionService) {}

  @Mutation(() => Discussion)
  async removeDiscussion(@Args('id') id: number): Promise<Discussion> {
    const discussion = await this.discussionService.getDiscussionById(id);
    return this.discussionService.removeDiscussion(discussion);
  }
}
