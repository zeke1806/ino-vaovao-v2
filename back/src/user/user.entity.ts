import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { PhotoProfile } from '../photo-profile/photo-profile.entity';

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  username: string;

  @Column()
  password: string;

  @Field()
  @Column({ default: false })
  statusConnected: boolean;

  @Field(() => PhotoProfile, { nullable: true })
  currentPhoto: PhotoProfile;

  @Field(() => [PhotoProfile])
  photos: PhotoProfile[];
}
