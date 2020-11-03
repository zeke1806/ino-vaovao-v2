import { Module, forwardRef } from '@nestjs/common';

import { Discussion } from './discussion.entity';
import { DiscussionResolverField } from './resolver-field/discussion';
import { DiscussionResolvers } from './resolvers';
import { DiscussionService } from './discussion.service';
import { DiscussionUserModule } from '../discussion-user/discussion-user.module';
import { MessageModule } from '../message/message.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { ViewMessageModule } from '../view-message/view-message.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Discussion]),
    forwardRef(() => UserModule),
    forwardRef(() => DiscussionUserModule),
    forwardRef(() => MessageModule),
    ViewMessageModule,
  ],
  providers: [
    DiscussionService,
    ...DiscussionResolvers,
    DiscussionResolverField,
  ],
  exports: [DiscussionService],
})
export class DiscussionModule {}
