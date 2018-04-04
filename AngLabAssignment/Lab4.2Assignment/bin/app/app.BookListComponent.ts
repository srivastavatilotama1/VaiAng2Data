import {Component,OnInit} from '@angular/core';
import {IBook} from './IBook';
import {BookService} from './BookService';
import {BookData} from './bookSerCom';
@Component({
    selector:'<my-component></my-component>',
    templateUrl:'./app.BookListComponent.html',
    providers:[BookService]
})
export class BookList implements  OnInit
{    
    searchTitle:string='';
    searchAuthor:string='';
    books:IBook[];  
    constructor(private bookservice:BookService,private bookData:BookData) {}
   
ngOnInit(): void {
    this.bookservice.getAllBooks().
    subscribe((bookData)=>this.books=bookData);
}

setAuthor():void
{
    this.searchAuthor="author";    
    this.bookData.bkAuthor= this.searchAuthor;
    alert( this.searchAuthor);
    alert( this.bookData.bkAuthor);
}
setTitle()
{
    this.searchTitle="title";
    this.bookData.bkTitle= this.searchTitle;
    alert( this.searchTitle);
    alert(  this.bookData.bkTitle);
    }
    
            
    
}