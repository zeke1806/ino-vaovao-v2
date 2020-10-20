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
  @RelationId((FriendHistory: FriendHistory) => FriendHistory.user)
  userId: number;

  @ManyToOne(() => User, { primary: true })
  @JoinColumn({ name: 'friend' })
  @Field()
  friend: User;
  @RelationId((friendHistory: FriendHistory) => friendHistory.friend)
  friendId: number;

  @Field()
  @Column()
  accepted: boolean;
}
