import { Column, Entity, JoinColumn, ManyToOne, RelationId } from "typeorm";
import { DiscussionEntity } from "../discussion/discussion.entity";
import { UserEntity } from "../user/user.entity";

@Entity({ name: 'discussion_user' })
export class DiscussionUserEntity {
  @ManyToOne(() => DiscussionEntity, { primary: true })
  @JoinColumn({name: 'message'})
  discussion: DiscussionEntity;
  @RelationId((discU: DiscussionUserEntity) => discU.discussion)
  discussionId: number;

  @ManyToOne(() => UserEntity, { primary: true })
  @JoinColumn({name: 'user'})
  user: UserEntity;
  @RelationId((discU: DiscussionUserEntity) => discU.user)
  userId: number;

  @Column({ default: false })
  creator: boolean;
}
