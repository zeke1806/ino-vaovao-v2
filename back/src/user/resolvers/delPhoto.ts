import { Resolver, User } from "../../types"
import { authGuard } from "../../utils/authGuard";
import { delUserPhoto } from "../../utils/delPhotoIfExist";
import { mapUser } from "../../utils/mapEntityScema";
import { UserEntity } from "../user.entity";

type T = Resolver<User, {}, { req: any }>;
export const delPhoto: T = async (_, __, { req }) => {
  const {
    payload: { id }
  } = authGuard(req);
  const r = (await delUserPhoto(id)) as UserEntity;
  return mapUser(r)
}