import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { DiscussionEntity } from "../discussion/discussion.entity";
import { UserEntity } from "../user/user.entity";

@Entity({ name: 'message' })
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column({ type: 'timestamptz' })
  createdAt: Date;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'sender'})
  sender: UserEntity;
  @RelationId((m: MessageEntity) => m.sender)
  senderId: number;

  @ManyToOne(() => DiscussionEntity)
  @JoinColumn({name: 'discussion'})
  discussion: DiscussionEntity;
  @RelationId((m: MessageEntity) => m.discussion)
  discussionId: number;
}