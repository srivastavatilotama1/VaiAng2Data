class EmployeeOne {
    empId:number;
    empName:string;
   static numberOfEmployee:number=0;
constructor(id:number,name:string) {
	this.empId=id;
	this.empName=name;
	EmployeeOne.numberOfEmployee++;
}
doGet():void{
    document.write(this.empId+" "+this.empName);
}
static getNumber():number{
    return EmployeeOne.numberOfEmployee;
}
}
let empOne=new EmployeeOne(1001,"Abcd");
empOne.doGet();
EmployeeOne.getNumber();

