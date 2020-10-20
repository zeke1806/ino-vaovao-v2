import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Discussion } from '../discussion/discussion.entity';
import { User } from '../user/user.entity';

@Entity()
export class DiscussionUser {
  @ManyToOne(() => Discussion, { primary: true })
  @JoinColumn()
  discussion: number;

  @ManyToOne(() => User, { primary: true })
  @JoinColumn()
  user: number;
}
