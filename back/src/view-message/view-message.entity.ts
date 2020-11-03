import { Column, Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';

import { Message } from '../message/message.entity';
import { User } from '../user/user.entity';

@Entity()
export class ViewMessage {
  @ManyToOne(() => Message, { primary: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'message' })
  message: Message;
  @RelationId((viewMessage: ViewMessage) => viewMessage.message)
  messageId: number;

  @ManyToOne(() => User, { primary: true })
  @JoinColumn({ name: 'user' })
  user: User;
  @RelationId((viewMessage: ViewMessage) => viewMessage.user)
  userId: number;

  @Column()
  view: boolean;
}
