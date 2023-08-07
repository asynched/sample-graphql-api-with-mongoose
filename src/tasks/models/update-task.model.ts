import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  completed: boolean;
}
