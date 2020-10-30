import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

import { Message } from './message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  paginateMessage(
    qb: SelectQueryBuilder<Message>,
    options: IPaginationOptions,
  ): Promise<Pagination<Message>> {
    return paginate<Message>(qb, options);
  }

  getMessageById(messageId: number): Promise<Message> {
    return this.messageRepository.findOne(messageId);
  }

  saveMessage(message: Message): Promise<Message> {
    return this.messageRepository.save(message);
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

  createMessageByDiscussionQB(
    discussionId: number,
  ): SelectQueryBuilder<Message> {
    return this.messageRepository
      .createQueryBuilder('message')
      .where(`message.discussion = ${discussionId}`);
  }
}
