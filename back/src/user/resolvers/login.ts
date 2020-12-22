import { MutationLoginArgs, Resolver, Token } from "../../types";
import { UserService } from "../user.service";
import bcrypt from "bcrypt";
import { setTokens } from "../../libs/json-web-token";
import { ApolloError } from "apollo-server-express";

type T = Resolver<Token | null, {}, {}, MutationLoginArgs>;

export const login: T = async (_, { username, password }) => {
  const userService = new UserService();
  const user = await userService.getByUsername(username);
  const error = new ApolloError('connection info error');

  if (!user) throw error;
  if (!(await bcrypt.compare(password, user.password))) throw error;

  return {
    token: setTokens(user),
  };
};
