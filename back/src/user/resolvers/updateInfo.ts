import { ApolloError } from "apollo-server-express";
import { Resolver, User, MutationUpdateInfoArgs } from "../../types";
import { authGuard } from "../../utils/authGuard";
import { UserService } from "../user.service";
import bcrypt from "bcrypt";

type T = Resolver<User, {}, { req: any }, MutationUpdateInfoArgs>;

export const updateInfo: T = async (_, { input: { username, password, birthday, sex } }, { req }) => {
  const { 
    payload: { id }
  } = authGuard(req);
  const userService = new UserService();
  const toUpdate = await userService.getById(id);
  if(!toUpdate) throw new ApolloError('user not found');
  
  toUpdate.username = username;
  toUpdate.password = await bcrypt.hash(password, 10);
  toUpdate.birthday = new Date(birthday);
  toUpdate.sex = sex;
  const r = await userService.save(toUpdate);
  
  return {
    id: r.id.toString(),
    username: r.username,
    birthday: r.birthday.toString(),
    sex: r.sex,
    photo: r.photo,
    photoPublicId: r.photoPublicId
  }
}