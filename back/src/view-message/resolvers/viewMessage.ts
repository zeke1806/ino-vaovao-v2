import { MessageEntity } from "../../message/message.entity";
import { MessageService } from "../../message/message.service";
import { Message, MutationViewMessageArgs, Resolver } from "../../types";
import { UserEntity } from "../../user/user.entity";
import { UserService } from "../../user/user.service";
import { authGuard } from "../../utils/authGuard";
import { mapMessage } from "../../utils/mapEntityScema";
import { ViewMessageEntity } from "../viewMessage.entity";
import { ViewMessageService } from "../viewMessage.service";

type T = Resolver<Message, {}, { req: any }, MutationViewMessageArgs>;

export const viewMessage: T = async (_, { messageId }, { req }) => {
  const {
    payload: { id }
  } = authGuard(req);
  const userService = new UserService();
  const messageService = new MessageService();
  const viewMService = new ViewMessageService();

  const user = await userService.getById(id) as UserEntity;
  const message = await messageService.getById(+messageId) as MessageEntity;
  const newVM = new ViewMessageEntity();
  newVM.user = user;
  newVM.message = message;
  newVM.view = true;
  await viewMService.save(newVM);

  return mapMessage(message);
}