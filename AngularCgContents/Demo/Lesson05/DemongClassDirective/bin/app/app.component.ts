import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`{{name}}
  <p [ngClass]="{classone:cone,classtwo:ctwo}">Change color</p>
  <button (click)="changeData()">Click Me</button>
      `,
  styles:[`.classone{color:red}
            .classtwo{background-color:green}`]
})
export class AppComponent { name = 'Welcome Angular 2'; 
            cone:boolean=true;
            ctwo:boolean=false;
            changeData():void{
            this.cone=!this.cone;
            this.ctwo=!this.ctwo;
}

}
