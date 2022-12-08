import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirective2]',
})
export class Directive2Directive {
  @Input() colorToApply = 'green';

  constructor(private element: ElementRef) {}

  ngOnInit() {
    console.log('Création de ma directive 2');
    console.log(this.colorToApply);
  }

  @HostListener('click')
  onClickElement() {
    this.element.nativeElement.style.color = this.colorToApply;
  }
}
