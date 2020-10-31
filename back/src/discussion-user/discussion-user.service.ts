import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';

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

  getUserDiscussions(user: User): Promise<DiscussionUser[]> {
    return this.discussionUserRepository.find({
      where: {
        user,
      },
    });
  }

  getDiscussionParticipants(discussionId: number): Promise<DiscussionUser[]> {
    return this.discussionUserRepository
      .createQueryBuilder('discussionUser')
      .where(`discussionUser.discussion = ${discussionId}`)
      .getMany();
  }
}
