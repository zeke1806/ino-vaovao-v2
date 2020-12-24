import { MessageEntity } from "../message/message.entity";
import { User } from "../types";
import { UserEntity } from "../user/user.entity";

export const mapUser = (userEntity: UserEntity): User => ({
  id: userEntity.id.toString(),
  username: userEntity.username,
  sex: userEntity.sex,
  birthday: userEntity.birthday.toString(),
  photo: userEntity.photo,
  photoPublicId: userEntity.photoPublicId
});