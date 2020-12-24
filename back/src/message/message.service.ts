import { getRepository, Repository } from "typeorm";
import { MessageEntity } from "./message.entity";

export class MessageService {
  private messageRepository: Repository<MessageEntity>;

  constructor() {
    this.messageRepository = getRepository(MessageEntity);
  }

  save(message: MessageEntity): Promise<MessageEntity> {
    return this.messageRepository.save(message);
  }
}