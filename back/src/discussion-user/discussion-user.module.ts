import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscussionUser } from './discussion-user.entity';
import { DiscussionUserService } from './discussion-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([DiscussionUser])],
  providers: [DiscussionUserService],
  exports: [DiscussionUserService],
})
export class DiscussionUserModule {}
