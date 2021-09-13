import { Directive, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[banner-host]'
})
export class ComponentHostDirective {
constructor(public viewContainerRef: ViewContainerRef) { }
}