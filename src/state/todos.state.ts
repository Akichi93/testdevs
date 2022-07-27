import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';

import { tap } from 'rxjs/operators';

import {
  GetTodos,
} from './todos.actions';

import { Todo } from '@serverAPI/todos/interfaces/todo.interface';

export class TodosStateModel {
  public todos!: Todo[];
  // public selectedTodo: Todo;
}

@State<TodosStateModel>({
  name: 'todos',
  defaults: {
    todos: [],
    // selectedTodo: null,
  },
})
@Injectable()
export class TodosState {
  todoSvc: any;
  // constructor(private readonly todoSvc: TodoService) {}

  @Selector()
  public static getTodoList({ todos }: TodosStateModel) {
    return todos;
  }

  // @Selector()
  // public static getSelectedTodo({ selectedTodo }) {
  //   return selectedTodo;
  // }

  @Action(GetTodos)
  getTodos({ getState, setState }: StateContext<TodosStateModel>) {
    return this.todoSvc.getAll().pipe(
      tap((todos) => {
        const state = getState();
        setState({ ...state,  });
      })
    );
  }
}
