import { Resolver, User } from "../../types";

import { UserService } from "../user.service";

export const users: Resolver<User[]> = async () => {
  const userService = new UserService();
  return (await userService.getAll()).map((ue) => ({
    id: ue.id,
    username: ue.username,
    sex: ue.sex,
    birthday: ue.birthday.toISOString()
  }));
};
