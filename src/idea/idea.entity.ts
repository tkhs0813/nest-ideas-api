import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from 'src/user/user.entity';
import { UserRO } from 'src/user/user.dto';

@Entity('idea')
export class IdeaEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @CreateDateColumn() created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column('text') idea: string;

  @Column('text') description: string;

  @ManyToOne(
    type => UserEntity,
    author => author.ideas,
  )
  author: UserEntity;
}

export class IdeaRO {
  id?: string;
  updated: Date;
  created: Date;
  idea: string;
  description: string;
  author: UserRO;
}
