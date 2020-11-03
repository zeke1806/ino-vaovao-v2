import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { Discussion } from '../../discussion/discussion.entity';
import { DiscussionService } from '../../discussion/discussion.service';
import { UserService } from '../../user/user.service';
import { PubSubService } from '../../utils/pubSub.service';
import { ViewMessage } from '../../view-message/view-message.entity';
import { ViewMessageService } from '../../view-message/view-message.service';
import { Message } from '../message.entity';
import { MessageService } from '../message.service';
import { SendMessageInput } from '../message.type';

const EVENT = 'sendMessageEvent';

@Resolver()
export class SendMessageResolver {
  constructor(
    private messageService: MessageService,
    private discussionService: DiscussionService,
    private userService: UserService,
    private pubSubService: PubSubService,
    private viewMessageService: ViewMessageService,
  ) {}

  @Mutation(() => Discussion)
  @UseGuards(GqlAuthGuard)
  async sendMessage(
    @CurrentUser() { payload }: AuthPayload,
    @Args('data') data: SendMessageInput,
  ): Promise<Discussion> {
    const sender = await this.userService.getUserById(payload.id);
    const { discussionId, content } = data;
    const discussion = await this.discussionService.getDiscussionById(
      discussionId,
    );

    const newMessage = new Message();
    newMessage.discussion = discussion;
    newMessage.sender = sender;
    newMessage.content = content;
    newMessage.createdAt = new Date();
    const savedMessage = await this.messageService.saveMessage(newMessage);

    const viewMessage = new ViewMessage();
    viewMessage.user = sender;
    viewMessage.message = savedMessage;
    viewMessage.view = true;
    await this.viewMessageService.saveViewMessage(viewMessage);

    this.pubSubService.pubSub.publish(EVENT, discussion);

    return discussion;
  }

  @Subscription(() => Discussion, {
    resolve: pub => pub,
    filter: (payload: Discussion, variables: { discussionId: number }) =>
      payload.id === variables.discussionId,
  })
  async sendMessageEvent(
    @Args('discussionId') discussionId: number,
  ): Promise<AsyncIterator<unknown, any, undefined>> {
    return this.pubSubService.pubSub.asyncIterator(EVENT);
  }
}
