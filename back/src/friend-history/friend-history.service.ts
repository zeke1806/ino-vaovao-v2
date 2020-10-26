import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
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

  createFriendsIdQB(userId: number): SelectQueryBuilder<FriendHistory> {
    return this.friendRepository
      .createQueryBuilder('friendh')
      .select('friendh.friend')
      .where(`friendh.user = ${userId}`)
      .andWhere(`friendh.accepted = ${true}`);
  }

  createUsersWhoSentMeARequestIdQB(
    userId: number,
  ): SelectQueryBuilder<FriendHistory> {
    return this.friendRepository
      .createQueryBuilder('friendh')
      .select('friendh.user')
      .where(`friendh.friend = ${userId}`)
      .andWhere(`friendh.accepted = ${false}`);
  }
}
