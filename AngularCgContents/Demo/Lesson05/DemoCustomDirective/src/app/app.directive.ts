import { Directive, TemplateRef, ViewContainerRef, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class MyOwnDirective{
    
    constructor(private el: ElementRef) { }

    @Input() defaultColor: string;

    @Input('appHighlight') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.highlightColor || this.defaultColor || 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }

    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}