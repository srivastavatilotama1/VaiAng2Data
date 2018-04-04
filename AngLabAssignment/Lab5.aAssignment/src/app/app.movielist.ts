import {Component,OnInit} from '@angular/core';
import {Movie} from './movie';
import {MovieService} from './movie.service';


@Component({
    selector:'<my-component></my-component>',
    templateUrl:'./app.employeecomponent.html',
    providers:[MovieService]
})
export class MovieList implements  OnInit
{
    
    mov:Movie[];
    statusmessage:string;
constructor(private movservice:MovieService) {}
ngOnInit(): void 
{
   /* this.movservice.getAllMovie().
    subscribe((movData)=>this.mov=movData,
    (error)=>{
        this.statusmessage="Problem with service check server"
           // console.error(error);
    }    
    ); */
}
}