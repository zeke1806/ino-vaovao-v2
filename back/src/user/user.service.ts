import { Injectable } from '@nestjs/common';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './user.entity';
import { FriendHistory } from '../friend-history/friend-history.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUserById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  getUserByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({ where: { username } });
  }

  createUser(newUser: User): Promise<User> {
    return this.userRepository.save(newUser);
  }

  updateUser(newUser: User): Promise<User> {
    return this.userRepository.save(newUser);
  }

  async friendSuggestion(
    userId: number,
    friendsIdQB: SelectQueryBuilder<FriendHistory>,
    friendsWhoSentMeARequestIdQB: SelectQueryBuilder<FriendHistory>,
  ): Promise<User[]> {
    return this.userRepository
      .createQueryBuilder('user')
      .where(`user.id NOT IN (${friendsIdQB.getQuery()})`)
      .andWhere(`user.id NOT IN (${friendsWhoSentMeARequestIdQB.getQuery()})`)
      .andWhere(`user.id != ${userId}`)
      .getMany();
  }
}
