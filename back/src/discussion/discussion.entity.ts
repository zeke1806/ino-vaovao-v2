import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Discussion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
