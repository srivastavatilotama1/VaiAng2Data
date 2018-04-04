import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`{{name}}
  <p [ngStyle]="{'font-style':view,'font-size':size}">Change Style</p>
 
      `
})
export class AppComponent { name = 'Welcome Angular 2'; 
            view:string="italic";
            size:string="30px";
            
            


}
