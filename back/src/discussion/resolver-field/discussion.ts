import { ResolveField, Resolver, Root } from '@nestjs/graphql';

import { Discussion } from '../discussion.entity';
import { LastMessage } from '../discussion.types';
import { MessageService } from '../../message/message.service';
import { UserService } from '../../user/user.service';
import { UseGuards } from '@nestjs/common';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { ViewMessageService } from '../../view-message/view-message.service';
import { User } from '../../user/user.entity';
import { DiscussionUserService } from '../../discussion-user/discussion-user.service';

@Resolver(() => Discussion)
export class DiscussionResolverField {
  constructor(
    private messageService: MessageService,
    private userService: UserService,
    private viewMessageService: ViewMessageService,
    private discussionUserService: DiscussionUserService,
  ) {}

  @ResolveField(() => LastMessage)
  @UseGuards(GqlAuthGuard)
  async lastMessage(
    @Root() discussion: Discussion,
    @CurrentUser() { payload }: AuthPayload,
  ): Promise<LastMessage> {
    const {
      lastMessageId,
    } = await this.messageService.getLastDiscussionMessage(discussion.id);
    const message = await this.messageService.getMessageById(lastMessageId);

    if (!lastMessageId) return null;

    const user = await this.userService.getUserById(payload.id);
    const viewMessage = await this.viewMessageService.getViewMessage(
      user,
      message,
    );
    const view = viewMessage ? true : false;

    return {
      message,
      view,
    };
  }

  @ResolveField(() => [User])
  async members(@Root() { id }: Discussion): Promise<User[]> {
    return Promise.all(
      (
        await this.discussionUserService.getDiscussionParticipants(id)
      ).map(async du => this.userService.getUserById(du.userId)),
    );
  }

  @ResolveField(() => User)
  async creator(@Root() { id }: Discussion): Promise<User> {
    return this.userService.getUserById(
      (await this.discussionUserService.getDiscussionCreator(id)).userId,
    );
  }
}
