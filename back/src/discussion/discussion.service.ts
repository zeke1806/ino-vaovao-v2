import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Discussion } from './discussion.entity';

@Injectable()
export class DiscussionService {
  constructor(
    @InjectRepository(Discussion)
    private discussionRepository: Repository<Discussion>,
  ) {}

  getDiscussionById(id: number): Promise<Discussion> {
    return this.discussionRepository.findOne(id);
  }

  saveDiscussion(discussion: Discussion): Promise<Discussion> {
    return this.discussionRepository.save(discussion);
  }

  removeDiscussion(discussion: Discussion): Promise<Discussion> {
    return this.discussionRepository.remove(discussion);
  }
}
