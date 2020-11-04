import { Args, ResolveField, Resolver, Root } from '@nestjs/graphql';

import { Discussion } from '../discussion.entity';
import { LastMessage } from '../discussion.types';
import { MessageService } from '../../message/message.service';
import { UserService } from '../../user/user.service';
import { ViewMessageService } from '../../view-message/view-message.service';
import { User } from '../../user/user.entity';
import { DiscussionUserService } from '../../discussion-user/discussion-user.service';
import { generateDiscussionMembers } from '../../utils/generateDiscussionMembers';

@Resolver(() => Discussion)
export class DiscussionResolverField {
  constructor(
    private messageService: MessageService,
    private userService: UserService,
    private viewMessageService: ViewMessageService,
    private discussionUserService: DiscussionUserService,
  ) {}

  @ResolveField(() => LastMessage)
  async lastMessage(
    @Root() discussion: Discussion,
    @Args('clientId') clientId: number,
  ): Promise<LastMessage> {
    const {
      lastMessageId,
    } = await this.messageService.getLastDiscussionMessage(discussion.id);
    const message = await this.messageService.getMessageById(lastMessageId);

    if (!lastMessageId) return null;

    const client = await this.userService.getUserById(clientId);
    const viewMessage = await this.viewMessageService.getViewMessage(
      client,
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
    return generateDiscussionMembers(
      id,
      this.discussionUserService,
      this.userService,
    );
  }

  @ResolveField(() => User)
  async creator(@Root() { id }: Discussion): Promise<User> {
    return this.userService.getUserById(
      (await this.discussionUserService.getDiscussionCreator(id)).userId,
    );
  }
}
