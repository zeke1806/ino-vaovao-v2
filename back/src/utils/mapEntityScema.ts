import { MessageEntity } from "../message/message.entity";
import { Message, User } from "../types";
import { UserEntity } from "../user/user.entity";

export const mapUser = (userEntity: UserEntity): User => ({
  id: userEntity.id.toString(),
  username: userEntity.username,
  sex: userEntity.sex,
  birthday: userEntity.birthday.toString(),
  photo: userEntity.photo,
  photoPublicId: userEntity.photoPublicId
});

export const mapMessage = (messageEntity: MessageEntity): Message => ({
  id: messageEntity.id.toString(),
  content: messageEntity.content,
  createdAt: messageEntity.createdAt.toString(),
  discussionId: messageEntity.discussionId.toString(),
  senderId: messageEntity.senderId.toString()
})