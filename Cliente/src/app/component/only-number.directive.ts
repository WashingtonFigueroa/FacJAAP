import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})
export class OnlyNumberDirective {

  expression = '^[0-9]*$';
  @Input() OnlyNumber: boolean;
  constructor(private el: ElementRef) { }
  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if (this.OnlyNumber) {
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            // Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
            // Ctrl+V
            (e.keyCode == 86 && e.ctrlKey === true) ||
            // Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
            // home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // Si es alguna de estas teclas de control no hacer nada
            return;
        }
        let character = String.fromCharCode(e.keyCode);
        let regexp = new RegExp(this.expression);
        if (regexp.test(character)) {
          return;
        } else {
          e.preventDefault();
        }
    }

  }

}
