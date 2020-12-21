import { Resolver, User } from "../../types";

import { UserService } from "../user.service";
import { authGuard } from "../../utils/authGuard";

export const me: Resolver<User, {}, { req: any }> = async (_, __, { req }) => {
  const {
    payload: { id },
  } = authGuard(req);
  const userService = new UserService();
  const user = await userService.getById(id);
  return {
    id: user!.id,
    username: user!.username,
  };
};
