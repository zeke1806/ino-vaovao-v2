import { Fh, FhStatus, Resolver } from "../../types";
import { UserEntity } from "../../user/user.entity";
import { UserService } from "../../user/user.service";
import { authGuard } from "../../utils/authGuard";
import { mapUser } from "../../utils/mapEntityScema";
import { FriendHistoryService } from "../friendHistory.service";

type T = Resolver<Fh[], {}, { req: any }>;

export const friendsHistory: T = async (_, __, { req }) => {
  const {
    payload: { id }
  } = authGuard(req);
  const userService = new UserService();
  const fhService = new FriendHistoryService();

  const me = await userService.getById(id) as UserEntity;
  const users = (await userService.getAll()).filter(u => u.id !== id);

  const fhs = await Promise.all(users.map(async (u): Promise<Fh> => {
    let status;
    const meFh = await fhService.getOne(me, u);
    const uFh = await fhService.getOne(u, me);

    if(!meFh && !uFh) status = FhStatus.Suggestion;
    else if(meFh && !uFh) status = FhStatus.RequestFromMe;
    else if(!meFh && uFh) status = FhStatus.RequestToMe;
    else status = FhStatus.Friend;

    return {
      id: u.id.toString(),
      friend: mapUser(u),
      status
    }
  }));

  return fhs;
}