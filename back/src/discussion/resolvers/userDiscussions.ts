import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { DiscussionUserService } from '../../discussion-user/discussion-user.service';
import { MessageService } from '../../message/message.service';
import { UserService } from '../../user/user.service';
import { ViewMessageService } from '../../view-message/view-message.service';

import { Discussion } from '../discussion.entity';
import { DiscussionService } from '../discussion.service';

@Resolver()
export class UserDiscussionsResolver {
  constructor(
    private discussionService: DiscussionService,
    private discussionUserService: DiscussionUserService,
    private userService: UserService,
    private messageService: MessageService,
    private viewMessageService: ViewMessageService,
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
        const discussion = await this.discussionService.getDiscussionById(id);
        const lastMessageId = (
          await this.messageService.getLastDiscussionMessage(id)
        ).lastMessageId;
        const message = await this.messageService.getMessageById(lastMessageId);
        const viewMessage = await this.viewMessageService.getViewMessage(
          user,
          message,
        );

        discussion.lastMessage = {
          message,
          view: viewMessage ? true : false,
        };

        discussion.participant = await Promise.all(
          (
            await this.discussionUserService.getDiscussionParticipants(id)
          ).map(async du => this.userService.getUserById(du.userId)),
        );

        discussion.creator = await this.userService.getUserById(
          (await this.discussionUserService.getDiscussionCreator(discussion.id))
            .userId,
        );

        return discussion;
      }),
    );
  }
}
