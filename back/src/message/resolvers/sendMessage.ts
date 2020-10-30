import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';
import { DiscussionUser } from '../../discussion-user/discussion-user.entity';
import { DiscussionUserService } from '../../discussion-user/discussion-user.service';
import { Discussion } from '../../discussion/discussion.entity';
import { DiscussionService } from '../../discussion/discussion.service';
import { UserService } from '../../user/user.service';
import { Message } from '../message.entity';
import { MessageService } from '../message.service';
import { SendMessageInput } from '../message.type';

@Resolver()
export class SendMessageResolver {
  constructor(
    private messageService: MessageService,
    private discussionService: DiscussionService,
    private discussionUserService: DiscussionUserService,
    private userService: UserService,
  ) {}

  @Mutation(() => Message)
  @UseGuards(GqlAuthGuard)
  async sendMessage(
    @CurrentUser() { payload }: AuthPayload,
    @Args('data') data: SendMessageInput,
  ): Promise<Message> {
    const { members, discussionId, discussionName, content } = data;
    let discussion: Discussion;

    if (discussionId) {
      discussion = await this.discussionService.getDiscussionById(discussionId);
    } else {
      // first message
      discussion = new Discussion();
      discussion.name = discussionName;
      discussion = await this.discussionService.saveDiscussion(discussion);

      await Promise.all(
        members.map(async id => {
          const discussionUser = new DiscussionUser();
          discussionUser.discussion = discussion;
          discussionUser.user = await this.userService.getUserById(id);
          if (payload.id === id) discussionUser.creator = true;
          return await this.discussionUserService.saveDiscussionUser(
            discussionUser,
          );
        }),
      );
    }

    const newMessage = new Message();
    newMessage.sender = await this.userService.getUserById(payload.id);
    newMessage.discussion = discussion;
    newMessage.content = content;
    newMessage.createdAt = new Date();
    const savedMessage = await this.messageService.saveMessage(newMessage);

    return savedMessage;
  }
}
