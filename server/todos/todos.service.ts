import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoDto } from '@serverAPI/todos/dto/create-todo';

@Injectable()
export class TodosService {
    constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

    async all(): Promise<Todo[]> {
      return this.todoModel.find();
    }
}
