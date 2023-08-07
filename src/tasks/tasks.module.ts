import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from '@/tasks/schemas/task.schema';
import { TasksResolver } from '@/tasks/tasks.resolver';
import { TasksService } from '@/tasks/tasks.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Task.name,
        schema: TaskSchema,
      },
    ]),
  ],
  providers: [TasksService, TasksResolver],
})
export class TasksModule {}
