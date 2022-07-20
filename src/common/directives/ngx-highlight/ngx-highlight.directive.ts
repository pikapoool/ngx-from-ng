import {
  Directive,
  ElementRef,
  HostListener,
} from "@angular/core";

@Directive({
  selector: '[ngxHighlight]'
})
export class NgxHighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}