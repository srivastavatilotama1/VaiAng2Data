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
var BookService_1 = require("./BookService");
var bookSerCom_1 = require("./bookSerCom");
var BookList = (function () {
    function BookList(bookservice, bookData) {
        this.bookservice = bookservice;
        this.bookData = bookData;
        this.searchTitle = '';
        this.searchAuthor = '';
    }
    BookList.prototype.ngOnInit = function () {
        var _this = this;
        this.bookservice.getAllBooks().
            subscribe(function (bookData) { return _this.books = bookData; });
    };
    BookList.prototype.setAuthor = function () {
        this.searchAuthor = "author";
        this.bookData.bkAuthor = this.searchAuthor;
        alert(this.searchAuthor);
        alert(this.bookData.bkAuthor);
    };
    BookList.prototype.setTitle = function () {
        this.searchTitle = "title";
        this.bookData.bkTitle = this.searchTitle;
        alert(this.searchTitle);
        alert(this.bookData.bkTitle);
    };
    return BookList;
}());
BookList = __decorate([
    core_1.Component({
        selector: '<my-component></my-component>',
        templateUrl: './app.BookListComponent.html',
        providers: [BookService_1.BookService]
    }),
    __metadata("design:paramtypes", [BookService_1.BookService, bookSerCom_1.BookData])
], BookList);
exports.BookList = BookList;
