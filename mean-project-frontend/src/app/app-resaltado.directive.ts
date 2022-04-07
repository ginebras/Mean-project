import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class AppResaltadoDirective {

  constructor(el:ElementRef){
    var element=el.nativeElement;
    element.style.background="blue";
    element.style.padding='20px';
    element.style.color="red";
  }

}
