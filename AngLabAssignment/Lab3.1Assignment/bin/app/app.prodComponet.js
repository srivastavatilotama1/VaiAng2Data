"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ProductComponent = (function () {
    function ProductComponent() {
        this.prod = { pId: null, pName: null, pCost: null, pOnline: null,
            pCatogory: null, pStores: null };
        this.cats = [
            { catId: 1, catName: "Grocery" },
            { catId: 2, catName: "Mobile" },
            { catId: 3, catName: "Electronics" },
            { catId: 4, catName: "Cloths" }
        ];
    }
    ProductComponent.prototype.getData = function (prodForm) {
        console.log(prodForm.value);
        // console.log(this.empskilln);
        //this.emp.eSkills=empForm.controls['gender'].value;
        // console.log(this.emp.eSkills);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'prod-app',
        templateUrl: './app.prodComponet.html'
    })
], ProductComponent);
exports.ProductComponent = ProductComponent;
