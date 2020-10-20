import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DiscussionUser } from './discussion-user.entity';

@Injectable()
export class DiscussionUserService {
  constructor(
    @InjectRepository(DiscussionUser)
    private discussionUserRepository: Repository<DiscussionUser>,
  ) {}

  saveDiscussionUser(discussionUser: DiscussionUser): Promise<DiscussionUser> {
    return this.discussionUserRepository.save(discussionUser);
  }
}
