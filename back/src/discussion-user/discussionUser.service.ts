import { getRepository, Repository } from "typeorm";
import { DiscussionUserEntity } from "./discussionUser.entity";

export class DiscussionUserService {
  private discURepo: Repository<DiscussionUserEntity>;

  constructor() {
    this.discURepo = getRepository(DiscussionUserEntity);
  }

  save(du: DiscussionUserEntity): Promise<DiscussionUserEntity> {
    return this.discURepo.save(du);
  }
}