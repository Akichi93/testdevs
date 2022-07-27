import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '@serverAPI/todos/interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private URL_API = 'http://localhost:4200/api/todos';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.URL_API)
  }
}
