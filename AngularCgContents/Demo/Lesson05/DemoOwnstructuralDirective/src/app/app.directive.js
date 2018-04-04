"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var MyOwnDirective = (function () {
    function MyOwnDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(MyOwnDirective.prototype, "loop", {
        set: function (num) {
            for (var i = 0; i < num; i++) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    return MyOwnDirective;
}());
__decorate([
    core_1.Input('myownloop'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MyOwnDirective.prototype, "loop", null);
MyOwnDirective = __decorate([
    core_1.Directive({
        selector: '[myownloop]'
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef])
], MyOwnDirective);
exports.MyOwnDirective = MyOwnDirective;
