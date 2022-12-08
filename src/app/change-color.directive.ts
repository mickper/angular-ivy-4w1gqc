import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColorDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit() {
    console.log('Création de ma directive');
  }

  @HostListener('click')
  onClickElement() {
    this.element.nativeElement.style.color = this.element.nativeElement.style
      .color
      ? null
      : 'red';
  }
}
