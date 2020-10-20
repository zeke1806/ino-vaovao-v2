import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';

import { Discussion } from './discussion.entity';
import { DiscussionService } from './discussion.service';
import { DiscussionResolvers } from './resolvers';

@Module({
  imports: [TypeOrmModule.forFeature([Discussion]), UserModule],
  providers: [DiscussionService, ...DiscussionResolvers],
})
export class DiscussionModule {}
