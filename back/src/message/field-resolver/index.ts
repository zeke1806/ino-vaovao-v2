import { Message, Resolver, User } from "../../types";
import { UserEntity } from "../../user/user.entity";
import { UserService } from "../../user/user.service";
import { mapUser } from "../../utils/mapEntityScema";
import { ViewMessageService } from "../../view-message/viewMessage.service";

type ViewsFR = Resolver<User[], Message>;
type SenderFR = Resolver<User, Message>;

export const views: ViewsFR = async ({ id }) => {
  const userService = new UserService();
  const vmService = new ViewMessageService();
  
  const viewsMessage = await vmService.getByMessageId(+id);
  const users = await Promise.all(viewsMessage.map(async (vm) => await userService.getById(vm.userId) as UserEntity));
  
  return users.map(u => mapUser(u));
}

export const sender: SenderFR = async ({ senderId }) => {
  const userService = new UserService();
  const sender = await userService.getById(+senderId) as UserEntity;
  return mapUser(sender);
}