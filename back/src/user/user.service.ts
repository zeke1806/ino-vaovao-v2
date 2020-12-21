import { Repository, getRepository } from "typeorm";

import { UserEntity } from "./user.entity";

export class UserService {
  private userRepository: Repository<UserEntity>;

  constructor() {
    this.userRepository = getRepository(UserEntity);
  }

  save(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.save(user);
  }

  getAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  getByUsername(username: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  getById(id: number): Promise<UserEntity | undefined> {
    return this.userRepository.findOne(id);
  }
}
