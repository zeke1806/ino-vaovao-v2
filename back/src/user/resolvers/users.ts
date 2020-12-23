import { url } from "inspector";
import { Resolver, User } from "../../types";

import { UserService } from "../user.service";

export const users: Resolver<User[]> = async () => {
  const userService = new UserService();
  return (await userService.getAll()).map((ue) => ({
    id: ue.id.toString(),
    username: ue.username,
    sex: ue.sex,
    birthday: ue.birthday.toISOString(),
    photo: ue.photo,
    photoPublicId: ue.photoPublicId
  }));
};
