import { Resolver, User } from "../../types";

import { UserService } from "../user.service";
import { authGuard } from "../../utils/authGuard";
import { ApolloError } from "apollo-server-express";
import { mapUser } from "../../utils/mapEntityScema";

export const me: Resolver<User, {}, { req: any }> = async (_, __, { req }) => {
  const {
    payload: { id },
  } = authGuard(req);
  const userService = new UserService();
  const user = await userService.getById(id);
  if(!user) throw new ApolloError('user id not find');
  
  return mapUser(user);
};
