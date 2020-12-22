import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { MessageEntity } from "../message/message.entity";
import { UserEntity } from "../user/user.entity";

@Entity({ name: 'discussion_user' })
export class DiscussionUserEntity {
  @ManyToOne(() => MessageEntity, { primary: true })
  @JoinColumn({name: 'message'})
  message: MessageEntity;
  @RelationId((discU: DiscussionUserEntity) => discU.message)
  messageId: number;

  @ManyToOne(() => UserEntity, { primary: true })
  @JoinColumn({name: 'user'})
  user: UserEntity;
  @RelationId((discU: DiscussionUserEntity) => discU.user)
  userId: number;

  @Column({ default: false })
  creator: boolean;
}
