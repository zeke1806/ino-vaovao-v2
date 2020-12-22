import { Column, Entity, JoinColumn, ManyToOne, RelationId } from "typeorm";
import { MessageEntity } from "../message/message.entity";
import { UserEntity } from "../user/user.entity";

@Entity({name: 'view_message'})
export class ViewMessageEntity {
  @ManyToOne(() => MessageEntity, {primary: true})
  @JoinColumn({name: 'message'})
  message: MessageEntity;
  @RelationId((vm: ViewMessageEntity) => vm.message)
  messageId: number;

  @ManyToOne(() => UserEntity, {primary: true})
  @JoinColumn({name: 'user'})
  user: UserEntity;
  @RelationId((vm: ViewMessageEntity) => vm.user)
  userId: number;

  @Column()
  view: boolean;
}