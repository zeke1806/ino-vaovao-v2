import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Friend } from './friend.entity';
import { UserModule } from '../user/user.module';
import { FriendHistoryResolvers } from './resolvers';
import { FriendService } from './friend.service';

@Module({
  imports: [TypeOrmModule.forFeature([Friend]), UserModule],
  providers: [...FriendHistoryResolvers, FriendService],
})
export class FriendModule { }
