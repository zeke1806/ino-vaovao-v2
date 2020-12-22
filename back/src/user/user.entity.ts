import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  sex: boolean;

  @Column({ type: 'date' })
  birthday: Date;

  @Column({ nullable: true, default: null })
  photo?: string;

  @Column({ nullable: true, default: null })
  photoPublicId?: string;
}
