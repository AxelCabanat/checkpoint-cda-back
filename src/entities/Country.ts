import { Field, ObjectType } from 'type-graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
class Country {
  @Field()
  @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

  @Field()
  @Column({ length: 2, unique: true })
    code: string;

  @Field()
  @Column({ length: 100, unique: true })
    name: string;

  @Field()
  @Column({ length: 100, unique: true })
    emoji: string;
}

export default Country;
