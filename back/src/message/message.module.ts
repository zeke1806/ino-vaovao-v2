import { Module, forwardRef } from '@nestjs/common';

import { DiscussionModule } from '../discussion/discussion.module';
import { DiscussionUserModule } from '../discussion-user/discussion-user.module';
import { Message } from './message.entity';
import { MessageResolverField } from './resolver-field/message';
import { MessageResolvers } from './resolvers';
import { MessageService } from './message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { ViewMessageModule } from '../view-message/view-message.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message]),
    UserModule,
    forwardRef(() => DiscussionModule),
    DiscussionUserModule,
    forwardRef(() => ViewMessageModule),
  ],
  providers: [MessageService, ...MessageResolvers, MessageResolverField],
  exports: [MessageService],
})
export class MessageModule {}
