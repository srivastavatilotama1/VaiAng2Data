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
var movie_service_1 = require("./movie.service");
var router_1 = require("@angular/router");
var MovieSearchComponent = (function () {
    function MovieSearchComponent(movservice, router) {
        this.movservice = movservice;
        this.router = router;
        this.msg = false;
        this.model = {};
        this.mCat = "";
        this.gens = ["Drama", "Fiction", "Satire"];
    }
    MovieSearchComponent.prototype.searchData = function () {
        var _this = this;
        alert("   in search " + this.model.moviesGenre);
        this.movservice.searchMovieByCate(this.model.moviesGenre).
            subscribe(function (movData) { return _this.movs = movData; }, function (error) {
            _this.statusmessage = "Problem with service check server";
            console.error(error);
        });
        this.msg = true;
        //  this.router.navigate(['/getdata']);
    };
    return MovieSearchComponent;
}());
MovieSearchComponent = __decorate([
    core_1.Component({
        templateUrl: './app.searchmovie.html',
        providers: [movie_service_1.MovieService]
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService, router_1.Router])
], MovieSearchComponent);
exports.MovieSearchComponent = MovieSearchComponent;