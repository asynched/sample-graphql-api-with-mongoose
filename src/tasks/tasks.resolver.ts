import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Task } from '@/tasks/models/task.model';
import { TasksService } from '@/tasks/tasks.service';
import { CreateTaskInput } from '@/tasks/models/create-task.model';
import { UpdateTaskInput } from './models/update-task.model';

@Resolver(() => Task)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query(() => [Task])
  async tasks() {
    const tasks = await this.tasksService.getTasks();

    return tasks;
  }

  @Query(() => Task)
  async task(@Args('id') id: string) {
    return await this.tasksService.getTaskById(id);
  }

  @Mutation(() => Task)
  async createTask(@Args('data') data: CreateTaskInput) {
    return await this.tasksService.createTask(data);
  }

  @Mutation(() => Task)
  async updateTask(
    @Args('id') id: string,
    @Args('data') data: UpdateTaskInput,
  ) {
    return await this.tasksService.updateTask(id, data);
  }

  @Mutation(() => Task)
  async deleteTask(@Args('id') id: string) {
    return await this.tasksService.deleteTask(id);
  }
}
