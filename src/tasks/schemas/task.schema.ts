import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Task {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop({ default: () => new Date() })
  createdAt: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

export type TaskDocument = HydratedDocument<Task>;
