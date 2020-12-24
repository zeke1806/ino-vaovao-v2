import { FhStatus, Resolver, User } from "../../types";
import { UserEntity } from "../../user/user.entity";
import { UserService } from "../../user/user.service";
import { authGuard } from "../../utils/authGuard";
import { mapUser } from "../../utils/mapEntityScema";
import { FriendHistoryService } from "../friendHistory.service";

type T = Resolver<User[], {}, { req: any }>;

export const friendsHistory: T = async (_, __, { req }) => {
  const {
    payload: { id }
  } = authGuard(req);
  const userService = new UserService();
  const fhService = new FriendHistoryService();

  const me = await userService.getById(id) as UserEntity;
  const users = (await userService.getAll()).filter(u => u.id !== id);

  const fhs = await Promise.all(users.map(async (u): Promise<User> => {
    let fhStatus;
    const meFh = await fhService.getOne(me, u);
    const uFh = await fhService.getOne(u, me);

    if(!meFh && !uFh) fhStatus = FhStatus.Suggestion;
    else if(meFh && !uFh) fhStatus = FhStatus.RequestFromMe;
    else if(!meFh && uFh) fhStatus = FhStatus.RequestToMe;
    else fhStatus = FhStatus.Friend;

    return {
      ...mapUser(u),
      fhStatus
    }
  }));

  return fhs;
}