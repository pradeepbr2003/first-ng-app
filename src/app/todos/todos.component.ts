import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { Todo } from '../model/todos.type';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  title = 'Please find todos list ';

  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    this.todoService.getTodosFromApi().pipe(catchError(err => {
      console.log(err);
      throw err;
    })).subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }
}
