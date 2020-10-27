import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
  @Column({ name: 'status_connected', default: false })
  statusConnected: boolean;

  @Field(() => PhotoProfile, { nullable: true })
  currentPhoto: PhotoProfile;

  @Field(() => [PhotoProfile])
  photos: PhotoProfile[];

  @Field(() => Boolean, { defaultValue: false })
  requested: boolean;
}
