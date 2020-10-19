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

  @Field()
  @Column()
  current: boolean;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user' })
  user: User;
  @RelationId((photoProfile: PhotoProfile) => photoProfile.user)
  idUser: number;
}
