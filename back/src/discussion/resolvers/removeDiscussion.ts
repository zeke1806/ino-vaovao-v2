import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { DiscussionService } from '../discussion.service';

@Resolver()
export class RemoveDiscussionResolver {
  constructor(private discussionService: DiscussionService) {}

  @Mutation(() => Boolean)
  async removeDiscussion(
    @Args('discussionId') discussionId: number,
  ): Promise<boolean> {
    const discussion = await this.discussionService.getDiscussionById(
      discussionId,
    );
    this.discussionService.removeDiscussion(discussion);
    return true;
  }
}
