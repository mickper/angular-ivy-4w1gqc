import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: '[app-child]',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
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
