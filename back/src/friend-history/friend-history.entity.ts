import { Entity, Column, ManyToOne, RelationId, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

import { User } from '../user/user.entity';

@ObjectType()
@Entity()
export class FriendHistory {
  @ManyToOne(() => User, { primary: true })
  @JoinColumn({ name: 'user' })
  @Field()
  user: User;
  @RelationId((friend: FriendHistory) => friend.user)
  userId: number;

  @ManyToOne(() => User, { primary: true })
  @JoinColumn({ name: 'friend' })
  @Field()
  friend: User;
  @RelationId((friend: FriendHistory) => friend.friend)
  friendId: number;

  @Field()
  @Column()
  accepted: boolean;
}
