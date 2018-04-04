interface Employee{
    
    firstName:string;
    lastName:string;
    age:number;
    salary:number;
    
}

let employee:Employee={
        firstName:"Rahul",
        lastName:"Vikash",
        age:32,
        salary:1000
}

document.write("Full name is"+this.employee.firstName+" "+this.employee.lastName+" Age is  "+this.employee.age+"<br/>");

//with array concept 
let empArray:Employee[]=[];

empArray.push({
    firstName:"Abcd",
    lastName:"Bcde",
    age:21,
    salary:6000
});

document.write("With array Full name is"+this.empArray[0].firstName+" "+this.empArray[0].lastName+" Age is  "+this.empArray[0].age);


