"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.employees = [
            { empId: 1001, empName: "Rahul", empSalary: 5000, empDepartment: "JAVA" },
            { empId: 1002, empName: "Vikash", empSalary: 6000, empDepartment: "JAVA" },
            { empId: 1003, empName: "Shital", empSalary: 7000, empDepartment: ".NET" },
        ];
        this.emp = { empId: 0, empName: "", empSalary: 0, empDepartment: "" };
        this.emp2 = { empId: 0, empName: "", empSalary: 0, empDepartment: "" };
    }
    AppComponent.prototype.displayEmpInfo = function () {
        /* alert("  ID: "+this.empId+
                    "  Name: "+this.empName+
                    "  Salary: "+this.empSalary+
                    "  Dept: "+this.empDept);*/
    };
    AppComponent.prototype.onAddEmp = function (empIdText, empNameText, empSalText, empDeptText) {
        this.employees.push({ empId: empIdText.value, empName: empNameText.value,
            empSalary: empSalText.value, empDepartment: empDeptText.value });
    };
    AppComponent.prototype.onDeleteEmp = function (i) {
        // this.employees.splice(this.employees.indexOf(this.emp),1);
        this.employees.splice(i, 1);
    };
    AppComponent.prototype.onUpdateEmp = function (i) {
        this.updateIndex = i;
        this.emp2.empId = this.employees[i].empId;
        this.emp2.empName = this.employees[i].empName;
        this.emp2.empSalary = this.employees[i].empSalary;
        this.emp2.empDepartment = this.employees[i].empDepartment;
    };
    AppComponent.prototype.editEmp = function (empIdText1, empNameText1, empSalText1, empDeptText1) {
        this.employees[this.updateIndex].empId = empIdText1.value;
        this.employees[this.updateIndex].empName = empNameText1.value;
        this.employees[this.updateIndex].empSalary = empSalText1.value;
        this.employees[this.updateIndex].empDepartment = empDeptText1.value;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
