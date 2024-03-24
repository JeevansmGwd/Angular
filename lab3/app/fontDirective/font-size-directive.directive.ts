import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
  standalone: true
})
export class FontSizeDirective implements OnChanges {

  constructor(private el: ElementRef) { }

  @Input('appFontSize') fontSize: number = 0;


  ngOnChanges(changes: SimpleChanges): void {
    const newFontSize = changes['fontSize'].currentValue;
    if (newFontSize) {
      this.el.nativeElement.style.fontSize = `${newFontSize}px`;
    }
  }
}