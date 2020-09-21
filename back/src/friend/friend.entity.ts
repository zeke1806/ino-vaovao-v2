import { Entity, Column, ManyToOne, RelationId, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

enum Status {
  Pending = 'Pending',
  Accepted = 'Accepted',
  Declined = 'Declined',
}

@Entity()
export class Friend {
  @ManyToOne(() => User, { primary: true })
  @JoinColumn()
  user: User;
  @RelationId((friend: Friend) => friend.user)
  userId: number;

  @ManyToOne(() => User, { primary: true })
  @JoinColumn()
  friend: User;
  @RelationId((friend: Friend) => friend.friend)
  friendId: number;

  @Column('text')
  status: Status;
}
