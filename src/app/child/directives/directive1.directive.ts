import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirective1]',
})
export class Directive1Directive {
  @Input() colorToApply = 'red';

  constructor(private element: ElementRef) {}

  ngOnInit() {
    console.log('Création de ma directive 1');
    console.log(this.colorToApply);
  }

  @HostListener('click')
  onClickElement() {
    this.element.nativeElement.style.color = this.colorToApply;
  }
}
