import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser, GqlAuthGuard } from '../../auth/auth.guards';
import { AuthPayload } from '../../auth/auth.model';

import { Message } from '../../message/message.entity';
import { MessageService } from '../../message/message.service';
import { UserService } from '../../user/user.service';
import { ViewMessage } from '../view-message.entity';
import { ViewMessageService } from '../view-message.service';

@Resolver()
export class ViewMessageResolver {
  constructor(
    private viewMessageService: ViewMessageService,
    private messageService: MessageService,
    private userService: UserService,
  ) {}

  @Mutation(() => Message)
  @UseGuards(GqlAuthGuard)
  async viewMessage(
    @CurrentUser() { payload }: AuthPayload,
    @Args('messageId') messageId: number,
  ): Promise<Message> {
    const user = await this.userService.getUserById(payload.id);
    const message = await this.messageService.getMessageById(messageId);
    const viewMessage = new ViewMessage();
    viewMessage.user = user;
    viewMessage.message = message;
    viewMessage.view = true;
    return (await this.viewMessageService.saveViewMessage(viewMessage)).message;
  }
}
