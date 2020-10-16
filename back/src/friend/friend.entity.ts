import { Entity, Column, ManyToOne, RelationId, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

import { User } from '../user/user.entity';

@ObjectType()
@Entity()
export class Friend {
  @ManyToOne(() => User, { primary: true })
  @JoinColumn()
  @Field()
  user: User;
  @RelationId((friend: Friend) => friend.user)
  userId: number;

  @ManyToOne(() => User, { primary: true })
  @JoinColumn()
  @Field()
  friend: User;
  @RelationId((friend: Friend) => friend.friend)
  friendId: number;

  @Field()
  @Column()
  accepted: boolean;
}
