import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscussionUserModule } from '../discussion-user/discussion-user.module';
import { UserModule } from '../user/user.module';

import { Discussion } from './discussion.entity';
import { DiscussionService } from './discussion.service';
import { DiscussionResolvers } from './resolvers';

@Module({
  imports: [
    TypeOrmModule.forFeature([Discussion]),
    forwardRef(() => UserModule),
    forwardRef(() => DiscussionUserModule),
  ],
  providers: [DiscussionService, ...DiscussionResolvers],
  exports: [DiscussionService],
})
export class DiscussionModule {}
