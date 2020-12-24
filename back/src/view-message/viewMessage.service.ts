import { getRepository, Repository } from "typeorm";
import { ViewMessageEntity } from "./viewMessage.entity";

export class ViewMessageService {
  private viewMSRepo: Repository<ViewMessageEntity>;

  constructor() {
    this.viewMSRepo = getRepository(ViewMessageEntity);
  }

  save(vm: ViewMessageEntity): Promise<ViewMessageEntity> {
    return this.viewMSRepo.save(vm);
  }

  getByMessageId(id: number): Promise<ViewMessageEntity[]> {
    return this.viewMSRepo.createQueryBuilder('vm')
      .where("vm.message = :messageId", { messageId: id })
      .getMany();
  }
}