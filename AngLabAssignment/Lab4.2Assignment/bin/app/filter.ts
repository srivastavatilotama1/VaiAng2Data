import {  Pipe, PipeTransform }      from '@angular/core';
import { IBook } from "./IBook";

@Pipe({
  name: 'searchPipe'
  
})
export class SearchPipe implements PipeTransform {
    transform(books:any, search:any): any {
           if(search==undefined) return books;
           return books.filter(function(bk:any){
               console.log(bk);
               return bk.title.toLowerCase().includes(search.toLowerCase());
           })
        }
  
  }
