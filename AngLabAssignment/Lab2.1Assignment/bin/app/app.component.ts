import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl:'./app.component.html'
})
export class AppComponent
{   
    updateIndex:any;
public  employees:any[]=[
                         {empId:1001,empName:"Rahul",empSalary:5000,empDepartment:"JAVA"},      
                         {empId:1002,empName:"Vikash",empSalary:6000,empDepartment:"JAVA"},     
                         {empId:1003,empName:"Shital",empSalary:7000,empDepartment:".NET"},                     
                         ];
public emp = {empId:0,empName:"",empSalary:0,empDepartment:""};
public emp2 = {empId:0,empName:"",empSalary:0,empDepartment:""};

displayEmpInfo():void
{        
    /* alert("  ID: "+this.empId+
                "  Name: "+this.empName+
                "  Salary: "+this.empSalary+
                "  Dept: "+this.empDept);*/
}
onAddEmp(empIdText:any,empNameText:any,empSalText:any,empDeptText:any)
{
    
    this.employees.push({empId:empIdText.value,empName:empNameText.value,
        empSalary:empSalText.value,empDepartment:empDeptText.value });       
}
onDeleteEmp(i:any)
{         
   // this.employees.splice(this.employees.indexOf(this.emp),1);//this will delete last record
    this.employees.splice(i,1);
}
onUpdateEmp(i:any)
{   
    this.updateIndex=i;
    this.emp2.empId=this.employees[i].empId;
    this.emp2.empName=this.employees[i].empName;
    this.emp2.empSalary=this.employees[i].empSalary;
    this.emp2.empDepartment=this.employees[i].empDepartment;
    
}
editEmp(empIdText1:any,empNameText1:any,empSalText1:any,empDeptText1:any)
{   
    this.employees[this.updateIndex].empId=empIdText1.value;
    this.employees[this.updateIndex].empName=empNameText1.value;
    this.employees[this.updateIndex].empSalary=empSalText1.value;
    this.employees[this.updateIndex].empDepartment=empDeptText1.value;
    
}

}
