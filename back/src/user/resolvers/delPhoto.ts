import { Resolver, User } from "../../types"
import { authGuard } from "../../utils/authGuard";
import { delUserPhoto } from "../../utils/delPhotoIfExist";
import { UserEntity } from "../user.entity";

type T = Resolver<User, {}, { req: any }>;
export const delPhoto: T = async (_, __, { req }) => {
  const {
    payload: { id }
  } = authGuard(req);
  const r = (await delUserPhoto(id)) as UserEntity;
  return {
    id: r.id.toString(),
    username: r.username,
    photo: r.photo,
    photoPublicId: r.photoPublicId,
    birthday: r.birthday.toString(),
    sex: r.sex
  }
}