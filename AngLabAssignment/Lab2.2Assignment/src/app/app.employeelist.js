"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EmployeeList = (function () {
    function EmployeeList() {
        this.employees = [
            { empId: 1001, empName: 'Rahul', empSal: 9000, empDep: 'JAVA', empjoiningdate: '6/12/2014' },
            { empId: 1002, empName: 'Vikash', empSal: 11000, empDep: 'ORAAPS', empjoiningdate: '6/12/2017' },
            { empId: 1003, empName: 'Uma', empSal: 12000, empDep: 'JAVA', empjoiningdate: '6/12/2010' },
            { empId: 1004, empName: 'Sachin', empSal: 11500, empDep: 'ORAAPS', empjoiningdate: '11/12/2017' },
            { empId: 1005, empName: 'Amol', empSal: 7000, empDep: '.NET', empjoiningdate: '1/1/2018' },
            { empId: 1006, empName: 'Vishal', empSal: 17000, empDep: 'BI', empjoiningdate: '9/12/2012' },
            { empId: 1007, empName: 'Rajita', empSal: 21000, empDep: 'BI', empjoiningdate: '6/7/2014' },
        ];
    }
    EmployeeList.prototype.onIDClick = function () {
        alert("ID Header Clicked");
        this.employees.sort(function (a, b) {
            var empIdA = a.empId;
            var empIdB = b.empId;
            if (empIdA < empIdB) {
                return -1;
            }
            if (empIdA > empIdB) {
                return 1;
            }
            return 0;
        });
    };
    // sort by empname
    EmployeeList.prototype.onNameClick = function () {
        alert("Name Header Clicked");
        this.employees.sort(function (a, b) {
            var nameA = a.empName.toUpperCase(); // ignore upper and lowercase
            var nameB = b.empName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    };
    /***********Sort By Salary***********/
    EmployeeList.prototype.onSalaryClick = function () {
        alert("Salary Header Clicked");
        this.employees.sort(function (a, b) {
            var salA = a.empSal;
            var salB = b.empSal;
            if (salA < salB) {
                return -1;
            }
            if (salA > salB) {
                return 1;
            }
            return 0;
        });
    };
    /***********Sort By Department*************/
    EmployeeList.prototype.onDeptClick = function () {
        alert("Dept Header Clicked");
        this.employees.sort(function (a, b) {
            var nameA = a.empDep.toUpperCase(); // ignore upper and lowercase
            var nameB = b.empDep.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    };
    EmployeeList.prototype.onDojClick = function () {
        alert("Dept Header Clicked");
    };
    return EmployeeList;
}());
EmployeeList = __decorate([
    core_1.Component({
        selector: '<my-component></my-component>',
        templateUrl: './app.employeecomponent.html',
    })
], EmployeeList);
exports.EmployeeList = EmployeeList;
