import { Column, Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'friend_history' })
export class FriendHistoryEntity {
  @ManyToOne(() => UserEntity, { primary: true })
  @JoinColumn({ name: 'user' })
  user: UserEntity;
  @RelationId((fh: FriendHistoryEntity) => fh.user)
  userId: number;

  @ManyToOne(() => UserEntity, { primary: true })
  @JoinColumn({ name: 'friend' })
  friend: UserEntity;
  @RelationId((fh: FriendHistoryEntity) => fh.friend)
  friendId: number;

  @Column()
  accepted: boolean;
}