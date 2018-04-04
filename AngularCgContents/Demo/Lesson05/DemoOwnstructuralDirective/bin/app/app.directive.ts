import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector:'[myownloop]'
})
export class MyOwnDirective{
    constructor( private templateRef: TemplateRef<any>,
            private viewContainer: ViewContainerRef) { }
@Input('myownloop') set loop(num: number) {
   for(var i=0; i < num; i++) {
       this.viewContainer.createEmbeddedView(this.templateRef);
   }
}
}