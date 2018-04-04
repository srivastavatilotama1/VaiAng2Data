import {Component} from '@angular/core';

@Component({
    selector:'<my-compo,ent></my-component>',
    templateUrl:'./app.employeecomponent.html',
    
})
export class AppEmployeeComponent{
    status:boolean=false;
    onClick():void{
        console.log('WELCOME to EVENT');
        alert("Hello World");
    }
    show():void{
        this.status=!this.status;
    }
    
}