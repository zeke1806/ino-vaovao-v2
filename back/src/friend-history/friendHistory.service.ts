import { getRepository, Repository } from "typeorm";
import { UserEntity } from "../user/user.entity";
import { FriendHistoryEntity } from "./friendHistory.entity";

export class FriendHistoryService {
  private fhRepository: Repository<FriendHistoryEntity>;

  constructor() {
    this.fhRepository = getRepository(FriendHistoryEntity);
  }

  getOne(user: UserEntity, friend: UserEntity) {
    return this.fhRepository.findOne({ where: {
      user,
      friend
    } })
  }

  save(fh: FriendHistoryEntity): Promise<FriendHistoryEntity> {
    return this.fhRepository.save(fh);
  }

  remove(fh: FriendHistoryEntity): Promise<FriendHistoryEntity> {
    return this.fhRepository.remove(fh);
  }
}