import {Component} from '@angular/core';

@Component({
    selector:'<my-compo,ent></my-component>',
    template:`<h2>Welcome {{empName}} your Id is {{empId}} & Department is {{empDepartment}} & Degination is {{empDegination}} </h2>`
})
export class AppEmployeeComponent{
    empId:number=1001;
    empName:string="Rahul";
    empDepartment:string="Java"
    empDegination:string="Consultant";
}