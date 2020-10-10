import { Entity, Column, ManyToOne, RelationId, JoinColumn } from 'typeorm';
import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';

import { User } from '../user/user.entity';

export enum FriendHistoryStatus {
  Pending = 'Pending',
  Accepted = 'Accepted',
  Declined = 'Declined',
}
registerEnumType(FriendHistoryStatus, {
  name: 'FriendHistoryStatus',
});

@ObjectType()
@Entity()
export class FriendHistory {
  @ManyToOne(() => User, { primary: true })
  @JoinColumn()
  @Field()
  user: User;
  @RelationId((friendHistory: FriendHistory) => friendHistory.user)
  userId: number;

  @ManyToOne(() => User, { primary: true })
  @JoinColumn()
  @Field()
  friend: User;
  @RelationId((friendHistory: FriendHistory) => friendHistory.friend)
  friendId: number;

  @Column('text')
  @Field(() => FriendHistoryStatus)
  status: FriendHistoryStatus;
}
