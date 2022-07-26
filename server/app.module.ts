import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';

import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/testdevs/browser')
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/testdev', {
      userNewUrlParser: true,
      userUnifiedTopology: true,
    }),
    TodosModule
  ],
})
export class AppModule {}