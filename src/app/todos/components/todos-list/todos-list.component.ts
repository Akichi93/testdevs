import { Component, OnInit } from '@angular/core';
import { TodoService } from '@app/todos/services/todo.service';
import { Todo } from '@serverAPI/todos/interfaces/todo.interface';
import { Observable } from 'rxjs';
import { TodosState } from '@store/todos.state';
import { Select, Store} from '@ngxs/store'
import { GetTodos } from '@store/todos.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  @Select(TodosState.getTodoList)
  todos$!: Observable<Todo[]>;
  store: any;
  constructor(private todoSvc:TodoService) { }

  ngOnInit(): void {
   this.store.dispatch(new GetTodos());
  }

}
