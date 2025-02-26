import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
count = signal(0);

increment() {
  this.count.update(val=> val+1);
}
decrement() {
  this.count.update(val=> val-1);
}
reset() {
  this.count.update(val=>0);
}
}
