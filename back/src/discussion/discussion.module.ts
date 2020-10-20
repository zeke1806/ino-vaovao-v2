import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Discussion } from './discussion.entity';
import { DiscussionService } from './discussion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Discussion])],
  providers: [DiscussionService],
})
export class DiscussionModule {}
