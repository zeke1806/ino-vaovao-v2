import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FriendHistory } from './friend-history.entity';
import { UserModule } from '../user/user.module';
import { FriendHistoryResolvers } from './resolvers';
import { FriendHistoryService } from './friend-history.service';

@Module({
  imports: [TypeOrmModule.forFeature([FriendHistory]), UserModule],
  providers: [...FriendHistoryResolvers, FriendHistoryService],
})
export class FriendHistoryModule {}
