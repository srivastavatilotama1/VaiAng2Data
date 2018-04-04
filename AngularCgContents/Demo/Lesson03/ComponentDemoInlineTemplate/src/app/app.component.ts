import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} calling other component  <my-component></my-component></h1>`
})
export class AppComponent { name = 'Welcome Angular 2'; }
