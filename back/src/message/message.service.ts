import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Message } from './message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  getMessageById(messageId: number): Promise<Message> {
    return this.messageRepository.findOne(messageId);
  }

  saveMessage(message: Message): Promise<Message> {
    return this.messageRepository.save(message);
  }

  getMessageByDiscussion(discussionId: number): Promise<Message[]> {
    return this.messageRepository.find({
      where: {
        discussionId,
      },
    });
  }

  getLastDiscussionMessage(
    discussionId: number,
  ): Promise<{
    lastMessageId: number;
  }> {
    return this.messageRepository
      .createQueryBuilder('message')
      .select('MAX(message.id)', 'lastMessageId')
      .where(`message.discussion = ${discussionId}`)
      .getRawOne<{ lastMessageId: number }>();
  }
}
