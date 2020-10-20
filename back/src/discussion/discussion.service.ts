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
}
