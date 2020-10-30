import { Args, Query, Resolver } from '@nestjs/graphql';
import { PaginationInput } from '../../utils/paginationUtils';

import { MessageService } from '../message.service';
import { MessagesResult } from '../message.type';

@Resolver()
export class MessagesResolver {
  constructor(private messageService: MessageService) {}

  @Query(() => MessagesResult)
  async messages(
    @Args('discussionId') discussionId: number,
    @Args('paginationInput') { page, limit }: PaginationInput,
  ): Promise<MessagesResult> {
    const messageByDiscussionQB = this.messageService.createMessageByDiscussionQB(
      discussionId,
    );
    const paginate = await this.messageService.paginateMessage(
      messageByDiscussionQB,
      {
        page,
        limit,
      },
    );

    return {
      paginationMeta: paginate.meta,
      data: paginate.items,
    };
  }
}
