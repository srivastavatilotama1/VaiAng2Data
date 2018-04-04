import {Component} from '@angular/core';

@Component({
    selector:'<my-compo,ent></my-component>',
    templateUrl:'./app.employeecomponent.html'
})
export class AppEmployeeComponent{
    empId:number=1001;
    empName:string="Rahul";
    empDepartment:string="Java";
    empDegination:string="Consultant"
    salary:number=1000.00;    
    companylogo:string='./LnD.jpg';
    takeHomesalary():number{
        let takehome=this.salary-(this.salary*.012);
        return takehome;
    }
}