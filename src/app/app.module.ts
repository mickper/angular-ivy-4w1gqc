import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChangeColorDirective } from './change-color.directive';
import { ChildComponent } from './child/child.component';
import { Directive1Directive } from './child/directives/directive1.directive';
import { Directive2Directive } from './child/directives/directive2.directive';
import { Child2Component } from './child2/child2.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ChangeColorDirective,
    ChildComponent,
    Directive2Directive,
    Directive1Directive,
    Child2Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
