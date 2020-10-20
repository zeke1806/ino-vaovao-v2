import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './user.entity';

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

  async friendSuggestion(friends: number[], userId: number): Promise<User[]> {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.id NOT IN (:...friends)', { friends })
      .andWhere('user.id != :userId', { userId })
      .getMany();
  }
}
