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
    function MyOwnDirective(el) {
        this.el = el;
    }
    MyOwnDirective.prototype.onMouseEnter = function () {
        this.highlight(this.highlightColor || this.defaultColor || 'red');
    };
    MyOwnDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    MyOwnDirective.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    return MyOwnDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MyOwnDirective.prototype, "defaultColor", void 0);
__decorate([
    core_1.Input('appHighlight'),
    __metadata("design:type", String)
], MyOwnDirective.prototype, "highlightColor", void 0);
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyOwnDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyOwnDirective.prototype, "onMouseLeave", null);
MyOwnDirective = __decorate([
    core_1.Directive({
        selector: '[appHighlight]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], MyOwnDirective);
exports.MyOwnDirective = MyOwnDirective;
