import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { Friend } from './friend.entity';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(Friend)
    private friendRepository: Repository<Friend>
  ) { }

  findByUserAndFriend(user: User, friend: User): Promise<Friend> {
    return this.friendRepository.findOne({ where: { user, friend } });
  }

  saveFriend(friend: Friend): Promise<Friend> {
    return this.friendRepository.save(friend);
  }
}
