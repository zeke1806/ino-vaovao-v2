import { MessageModule } from '../message/message.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { ViewMessage } from './view-message.entity';
import { ViewMessageResolvers } from './resolvers';
import { ViewMessageService } from './view-message.service';

@Module({
  imports: [TypeOrmModule.forFeature([ViewMessage]), MessageModule, UserModule],
  providers: [ViewMessageService, ...ViewMessageResolvers],
  exports: [ViewMessageService],
})
export class ViewMessageModule {}
