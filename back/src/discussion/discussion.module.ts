import { Module, forwardRef } from '@nestjs/common';

import { Discussion } from './discussion.entity';
import { DiscussionResolvers } from './resolvers';
import { DiscussionService } from './discussion.service';
import { DiscussionUserModule } from '../discussion-user/discussion-user.module';
import { MessageModule } from '../message/message.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Discussion]),
    forwardRef(() => UserModule),
    forwardRef(() => DiscussionUserModule),
    forwardRef(() => MessageModule),
  ],
  providers: [DiscussionService, ...DiscussionResolvers],
  exports: [DiscussionService],
})
export class DiscussionModule {}
