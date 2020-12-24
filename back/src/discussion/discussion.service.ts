import { getRepository, Repository } from "typeorm";
import { DiscussionEntity } from "./discussion.entity";

export class DiscussionService {
  private discussionRepo: Repository<DiscussionEntity>;

  constructor() {
    this.discussionRepo = getRepository(DiscussionEntity);
  }

  getById(id: number): Promise<DiscussionEntity | undefined> {
    return this.discussionRepo.findOne(id);
  }

  save(discussion: DiscussionEntity): Promise<DiscussionEntity> {
    return this.discussionRepo.save(discussion);
  }
}