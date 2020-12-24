import { DiscussionEntity } from "../../discussion/discussion.entity";
import { DiscussionService } from "../../discussion/discussion.service";
import { Message, MutationSendMessageArgs, Resolver } from "../../types";
import { UserEntity } from "../../user/user.entity";
import { UserService } from "../../user/user.service";
import { authGuard } from "../../utils/authGuard";
import { mapMessage } from "../../utils/mapEntityScema";
import { MessageEntity } from "../message.entity";
import { MessageService } from "../message.service";

type T = Resolver<Message, {}, { req: any }, MutationSendMessageArgs>;

export const sendMessage: T = async (_, { discussionId, content }, { req }) => {
  const {
    payload: { id }
  } = authGuard(req);
  const userService = new UserService();
  const messageService = new MessageService();
  const discussionService = new DiscussionService();

  const sender = await userService.getById(id) as UserEntity;
  const discussion = await discussionService.getById(+discussionId) as DiscussionEntity;
  let newMessage = new MessageEntity();
  newMessage.discussion = discussion;
  newMessage.sender = sender;
  newMessage.content = content;
  newMessage.createdAt = new Date();
  newMessage = await messageService.save(newMessage);

  return mapMessage(newMessage);
}