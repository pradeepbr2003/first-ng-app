import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  keyTypedMessage = signal('Not typed anything');
  greet = input("Greeting for you!");

  keyUpHandler(event: KeyboardEvent) {
    this.keyTypedMessage.set('you typed :' + event.key);
  }
}
