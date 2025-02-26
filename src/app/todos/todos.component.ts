import { UpperCasePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs';
import { HighlightCompletedTodoDirective } from '../directives/highlight-completed-todo.directive';
import { Todo } from '../model/todos.type';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  imports: [HighlightCompletedTodoDirective, UpperCasePipe, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  title = 'Please find todos list ';

  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  isLoaded = signal<boolean>(false);

  searchTerm = signal('');

  todoClicked(todo: Todo) {
    todo.completed = !todo.completed;
  }

  ngOnInit(): void {
    this.todoService.getTodosFromApi().pipe(catchError(err => {
      console.log(err);
      throw err;
    })).subscribe((todos) => {
      this.todoItems.set(todos);
      this.isLoaded.set(true);
    });
  }
}
