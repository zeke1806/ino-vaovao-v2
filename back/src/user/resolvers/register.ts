import { ApolloError } from "apollo-server-express";
import { MutationRegisterArgs, Resolver, User } from "../../types";
import { UserEntity } from "../user.entity";
import { UserService } from "../user.service";
import bcrypt from "bcrypt";
import { mapUser } from "../../utils/mapEntityScema";

type T = Resolver<User, {}, {}, MutationRegisterArgs>;

export const register: T = async (_, { input: { username, password, birthday, sex } }) => {
  const userService = new UserService();
  const isExist = await userService.getByUsername(username);
  if(isExist) throw new ApolloError('user already exist');

  const newUser = new UserEntity();
  newUser.username = username;
  newUser.password = await bcrypt.hash(password, 10);
  newUser.birthday = new Date(birthday);
  newUser.sex = sex;
  const r = await userService.save(newUser);

  return mapUser(newUser)
}