import { url } from "inspector";
import { Resolver, User } from "../../types";
import { mapUser } from "../../utils/mapEntityScema";

import { UserService } from "../user.service";

export const users: Resolver<User[]> = async () => {
  const userService = new UserService();
  return (await userService.getAll()).map((ue) => mapUser(ue));
};
