import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { FriendHistory } from './friend-history.entity';

@Injectable()
export class FriendHistoryService {
  constructor(
    @InjectRepository(FriendHistory)
    private friendRepository: Repository<FriendHistory>,
  ) {}

  findByUserAndFriend(user: User, friend: User): Promise<FriendHistory> {
    return this.friendRepository.findOne({ where: { user, friend } });
  }

  saveFriend(friend: FriendHistory): Promise<FriendHistory> {
    return this.friendRepository.save(friend);
  }

  removeFriend(friend: FriendHistory): Promise<FriendHistory> {
    return this.friendRepository.remove(friend);
  }

  async getFriends(userId: number): Promise<number[]> {
    return (
      await this.friendRepository
        .createQueryBuilder('friendh')
        .select('friendh.friend')
        .where('friendh.user = :userId', { userId })
        .andWhere('friendh.accepted = :accepted', { accepted: true })
        .getRawMany<Pick<FriendHistory, 'friend'>>()
    ).map(v => (v.friend as unknown) as number);
  }

  async getRequests(friendId: number): Promise<number[]> {
    return (
      await this.friendRepository
        .createQueryBuilder('friendh')
        .select('friendh.user')
        .where('friendh.friend = :friendId', { friendId })
        .andWhere('friendh.accepted = :accepted', { accepted: false })
        .getRawMany<Pick<FriendHistory, 'user'>>()
    ).map(v => (v.user as unknown) as number);
  }
}
