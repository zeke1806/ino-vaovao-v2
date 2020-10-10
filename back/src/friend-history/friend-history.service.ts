import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FriendHistory } from './friend-history.entity';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';

@Injectable()
export class FriendHistoryService {
  constructor(
    @InjectRepository(FriendHistory)
    private friendHistoryRepository: Repository<FriendHistory>,
  ) {}

  getFriendHistoryByFriend(friend: User): Promise<FriendHistory> {
    return this.friendHistoryRepository.findOne({ where: { friend } });
  }

  createOrUpdateFriendHistory(
    friendHistory: FriendHistory,
  ): Promise<FriendHistory> {
    return this.friendHistoryRepository.save(friendHistory);
  }
}
