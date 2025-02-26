import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todos.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);

  getTodosFromApi() {
    const url = "http://jsonplaceholder.typicode.com/todos";
    return this.http.get<Array<Todo>>(url);
  }
}
