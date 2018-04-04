
import { Component } from '@angular/core';
import {Movie} from './movie';
import {MovieService} from './movie.service';
import {Router} from '@angular/router'
@Component({ 
  templateUrl:'./app.searchmovie.html',
  providers:[MovieService]  
})
export class MovieSearchComponent 
{
    constructor(private movservice:MovieService,private router:Router) {}
    statusmessage:string;
    msg:boolean=false;
    movs:Movie[];
    model:any={};  
    mCat:any="";
    gens:string[]=[ "Drama", "Fiction","Satire" ];
   searchData():void
    {
       alert("   in search "+this.model.moviesGenre);      
        this.movservice.searchMovieByCate(this.model.moviesGenre).
        subscribe((movData)=>this.movs=movData,
        (error)=>{
            this.statusmessage="Problem with service check server"
             console.error(error);
        }    
        ); 
       this.msg=true;
      //  this.router.navigate(['/getdata']);
    }   
    
    
    
    
}