import { Module, forwardRef } from '@nestjs/common';

import { MessageModule } from '../message/message.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { ViewMessage } from './view-message.entity';
import { ViewMessageResolvers } from './resolvers';
import { ViewMessageService } from './view-message.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ViewMessage]),
    forwardRef(() => MessageModule),
    UserModule,
  ],
  providers: [ViewMessageService, ...ViewMessageResolvers],
  exports: [ViewMessageService],
})
export class ViewMessageModule {}
