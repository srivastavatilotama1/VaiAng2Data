import { Injectable }      from '@angular/core';
import {IBook} from './IBook';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
@Injectable()
export class BookService
{
    constructor(private http:Http) 
    {}    
    getAllBooks():Observable<IBook[]> 
   { 
        return  this.http.get("../assets/booklist.json").
        map((response:Response)=><IBook[]>response.json());
    }
}

