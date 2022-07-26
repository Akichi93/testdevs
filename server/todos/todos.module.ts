import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosController } from '@serverAPI/todos/todos.controller';
import { TododShema } from '@serverAPI/todos/schemas/todo.schema';
import { TodosService } from '@serverAPI/todos/todos.service'

@Module({
    imports : [MongooseModule.forFeature([{name: 'Todo', schema: TododShema}])],
    controllers: [TodosController],
    providers: [TodosService]
})
   
export class TodosModule {}
