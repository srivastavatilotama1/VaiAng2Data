"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppEmployeeComponent = (function () {
    function AppEmployeeComponent() {
        this.empId = 1001;
        this.empName = "Rahul";
        this.empDepartment = "Java";
        this.empDegination = "Consultant";
        this.salary = 1000.00;
        this.companylogo = './LnD.jpg';
    }
    AppEmployeeComponent.prototype.takeHomesalary = function () {
        var takehome = this.salary - (this.salary * .012);
        return takehome;
    };
    return AppEmployeeComponent;
}());
AppEmployeeComponent = __decorate([
    core_1.Component({
        selector: '<my-compo,ent></my-component>',
        templateUrl: './app.employeecomponent.html'
    })
], AppEmployeeComponent);
exports.AppEmployeeComponent = AppEmployeeComponent;
