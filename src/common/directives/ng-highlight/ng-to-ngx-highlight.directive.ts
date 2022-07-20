import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'ng-highlight'
})
export class NgHighlightDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('ngHighlight', elementRef, injector);
  }
}