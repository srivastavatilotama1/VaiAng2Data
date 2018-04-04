import {Component} from '@angular/core';
@Component({
    selector:'<my-component></my-component>',
    templateUrl:'./app.employeecomponent.html',
})
export class EmployeeList
{
    
    employees:any[]=[
{empId:1001,empName:'Rahul',empSal:9000,empDep:'JAVA',empjoiningdate:'6/12/2014'},
{empId:1002,empName:'Vikash',empSal:11000,empDep:'ORAAPS',empjoiningdate:'6/12/2017'},
{empId:1003,empName:'Uma',empSal:12000,empDep:'JAVA',empjoiningdate:'6/12/2010'},
{empId:1004,empName:'Sachin',empSal:11500,empDep:'ORAAPS',empjoiningdate:'11/12/2017'},
{empId:1005,empName:'Amol',empSal:7000,empDep:'.NET',empjoiningdate:'1/1/2018'},
{empId:1006,empName:'Vishal',empSal:17000,empDep:'BI',empjoiningdate:'9/12/2012'},
{empId:1007,empName:'Rajita',empSal:21000,empDep:'BI',empjoiningdate:'6/7/2014'},

                     ];


onIDClick():void
{
     alert ("ID Header Clicked");
     this.employees.sort(
             function(a:any, b:any) 
               {
                 var empIdA = a.empId; 
                 var empIdB = b.empId;
                 if (empIdA < empIdB) 
                 {
                       return -1;
                 }
                 if (empIdA > empIdB)
                 {
                   return 1;
                 }
               return 0;
               }
          )
}
// sort by empname
onNameClick():void
{
     alert ("Name Header Clicked");  
    this.employees.sort(
           function(a:any, b:any) 
             {
               var nameA = a.empName.toUpperCase(); // ignore upper and lowercase
               var nameB = b.empName.toUpperCase(); // ignore upper and lowercase
               if (nameA < nameB) 
               {
                     return -1;
               }
               if (nameA > nameB)
               {
                 return 1;
               }
             return 0;
             }
        )
}
/***********Sort By Salary***********/
onSalaryClick():void
{
     alert ("Salary Header Clicked");
     this.employees.sort(
             function(a:any, b:any) 
               {
                 var salA = a.empSal; 
                 var salB = b.empSal;
                 if (salA < salB) 
                 {
                       return -1;
                 }
                 if (salA > salB)
                 {
                   return 1;
                 }
               return 0;
               }
          )
}
/***********Sort By Department*************/
onDeptClick():void
{
     alert ("Dept Header Clicked");
     this.employees.sort(
             function(a:any, b:any) 
               {
                 var nameA = a.empDep.toUpperCase(); // ignore upper and lowercase
                 var nameB = b.empDep.toUpperCase(); // ignore upper and lowercase
                 if (nameA < nameB) 
                 {
                       return -1;
                 }
                 if (nameA > nameB)
                 {
                   return 1;
                 }
               return 0;
               }
          )
}
onDojClick():void
{
     alert ("Dept Header Clicked");
}
            
    
}