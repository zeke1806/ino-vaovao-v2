import { Column, Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';
import { Discussion } from '../discussion/discussion.entity';
import { User } from '../user/user.entity';

@Entity()
export class DiscussionUser {
  @ManyToOne(() => Discussion, { primary: true, onDelete: 'CASCADE' })
  @JoinColumn()
  discussion: Discussion;
  @RelationId((discussionUser: DiscussionUser) => discussionUser.discussion)
  discussionId: number;

  @ManyToOne(() => User, { primary: true })
  @JoinColumn()
  user: User;
  @RelationId((discussionUser: DiscussionUser) => discussionUser.user)
  userId: number;

  @Column({ default: false })
  creator: boolean;
}
