import { Column, Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';

import { Discussion } from '../discussion/discussion.entity';
import { Message } from '../message/message.entity';
import { User } from '../user/user.entity';

@Entity()
export class ViewMessage {
  @ManyToOne(() => Discussion, { primary: true })
  @JoinColumn({ name: 'discussion' })
  discussion: Discussion;
  @RelationId((viewMessage: ViewMessage) => viewMessage.discussion)
  discussionId: number;

  @ManyToOne(() => Message, { primary: true })
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
