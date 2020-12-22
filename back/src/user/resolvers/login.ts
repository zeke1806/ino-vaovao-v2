import { MutationLoginArgs, Resolver, Token } from "../../types";
import { UserService } from "../user.service";
import bcrypt from "bcrypt";
import { setTokens } from "../../libs/json-web-token";

type T = Resolver<Token | null, {}, {}, MutationLoginArgs>;

export const login: T = async (_, { username, password }) => {
  const userService = new UserService();
  const user = await userService.getByUsername(username);

  if (!user) return null;
  if (!(await bcrypt.compare(password, user.password))) return null;

  return {
    token: setTokens(user),
  };
};
