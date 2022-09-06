import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomOver]',
})
export class CustomOverDirective {
  @Output() appCustomOver = new EventEmitter();

  @HostListener('mouseenter') onMouseenter() {
    this.appCustomOver.emit(true);
  }
  @HostListener('mouseleave') onMouseleave() {
    this.appCustomOver.emit(false);
  }
}
