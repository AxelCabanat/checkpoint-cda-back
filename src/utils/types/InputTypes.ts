import { Length, MaxLength } from 'class-validator';
  import { Field, InputType } from 'type-graphql';

@InputType()
export class CountryInput {
    @Field()
    @Length(2)
      code: string;

    @Field()
    @MaxLength(100)
      name: string;
    
    @Field()
    @MaxLength(100)
      emoji: string;
    
}