import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  RelationId,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../user/user.entity';

@ObjectType()
@Entity({ name: 'photo_profile' })
export class PhotoProfile {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ name: 'public_id' })
  publicId: string;

  @Field()
  @Column()
  url: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id_user' })
  user: User;
  @RelationId((photoProfile: PhotoProfile) => photoProfile.user)
  idUser: number;
}
