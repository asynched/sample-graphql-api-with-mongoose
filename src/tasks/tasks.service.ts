import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '@/tasks/schemas/task.schema';
import { CreateTaskInput } from '@/tasks/models/create-task.model';
import { UpdateTaskInput } from './models/update-task.model';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<Task>,
  ) {}

  async getTasks() {
    return this.taskModel.find({});
  }

  async getTaskById(id: string) {
    return this.taskModel.findById(id);
  }

  async createTask(data: CreateTaskInput) {
    const task = new this.taskModel(data);
    return task.save();
  }

  async updateTask(id: string, data: UpdateTaskInput) {
    return await this.taskModel.findOneAndUpdate({ _id: id }, data);
  }

  async deleteTask(id: string) {
    return await this.taskModel.findOneAndDelete({ _id: id });
  }
}
