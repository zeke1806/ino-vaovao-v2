import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'discussion' })
export class DiscussionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}