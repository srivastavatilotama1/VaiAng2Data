import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html'
})
export class AppComponent
{ 
    name = 'Welcome Vaishali';
    empId:number=1001;
    empName:string="Vaishali";
    empSalary:number=5000;
    empDept:string="java";
    
    displayEmpInfo():void
    {        
        alert("  ID: "+this.empId+
                "  Name: "+this.empName+
                "  Salary: "+this.empSalary+
                "  Dept: "+this.empDept);
    }
    
}
