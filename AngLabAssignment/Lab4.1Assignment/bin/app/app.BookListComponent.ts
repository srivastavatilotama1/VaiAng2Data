import {Component,OnInit} from '@angular/core';
import {IBook} from './IBook';
import {BookService} from './BookService'
@Component({
    selector:'<my-component></my-component>',
    templateUrl:'./app.BookListComponent.html',
    providers:[BookService]
})
export class BookList implements  OnInit
{    
    books:IBook[];
    constructor(private bookservice:BookService) {}
ngOnInit(): void {
    this.bookservice.getAllBooks().
    subscribe((bookData)=>this.books=bookData);
}
    
            
    
}