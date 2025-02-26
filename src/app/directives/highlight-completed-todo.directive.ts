import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false);
  constructor() { }
  el = inject(ElementRef);
  stylesEffect = effect(() => {

    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backGroundColor = 'blue';
      this.el.nativeElement.style.color = 'red';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backGroundColor = 'grey';
      this.el.nativeElement.style.color = 'black';
    }
  })

}
