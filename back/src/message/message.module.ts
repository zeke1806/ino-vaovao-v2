import { DiscussionModule } from '../discussion/discussion.module';
import { DiscussionUserModule } from '../discussion-user/discussion-user.module';
import { Message } from './message.entity';
import { MessageResolverField } from './resolver-field/message';
import { MessageResolvers } from './resolvers';
import { MessageService } from './message.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message]),
    UserModule,
    DiscussionModule,
    DiscussionUserModule,
  ],
  providers: [MessageService, ...MessageResolvers, MessageResolverField],
})
export class MessageModule {}
