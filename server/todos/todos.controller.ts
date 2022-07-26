import { TodosService } from '@serverAPI/todos/todos.service';
import { Todo } from '@serverAPI/todos/interfaces/todo.interface';
import { Controller, Get } from '@nestjs/common';

@Controller('todos')
export class TodosController {
    constructor(private todosSvc: TodosService) {}

    @Get()
    async all(): Promise<Todo[]> {
      return this.todosSvc.all();
    }

    // @Post()
    // add() {
    //     return 'New TODO';
    // }

    // @Put() 
    // update() {
    //     return 'Updated'
    // }

    // @Delete()
    // delete(){
    //     return 'Deleted'
    // }

}
