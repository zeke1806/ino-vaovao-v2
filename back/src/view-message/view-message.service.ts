import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../message/message.entity';
import { User } from '../user/user.entity';
import { ViewMessage } from './view-message.entity';

@Injectable()
export class ViewMessageService {
  constructor(
    @InjectRepository(ViewMessage)
    private viewMessageRepository: Repository<ViewMessage>,
  ) {}

  getViewMessage(user: User, message: Message): Promise<ViewMessage> {
    return this.viewMessageRepository.findOne({
      where: {
        user,
        message,
      },
    });
  }

  saveViewMessage(viewMessage: ViewMessage): Promise<ViewMessage> {
    return this.viewMessageRepository.save(viewMessage);
  }
}
