class Employee {
    empId:number;
    empName:string;
    empsalary:number;
static emppf:number=12;
static company:string='CAPGEMINI';
}
let emp=new Employee();
emp.empId=1001;
emp.empName="Vikash";
emp.empsalary=1111;
document.write("Id is "+emp.empId+" Name is  "+emp.empName+" company "+Employee.company);

