import { NgForm } from "@angular/Forms/forms";
import { Component, OnInit } from '@angular/core';
import { Movie } from "./movie";
import { MovieService } from "./movie.service";
import {Router} from '@angular/router'
@Component({
  selector: 'my-app',
  templateUrl:'./homecomponent.html',
  providers:[MovieService]
})
export class HomeComponent 
{   
    movs:Movie[];
    model:any={};
    statusmessage:string;
    successmessage:string;
    gens:string[]=[ "Drama", "Fiction","Satire" ];
    constructor(private movservice:MovieService,private router:Router) {}    
    addData():void
    {
       console.log(" in home component addData function " +this.model.movId+"   "+this.model);
        this.movservice.addMovie(this.model).
        subscribe((movData)=>this.movs=movData,
            (error)=>{
                this.statusmessage="Problem with service check server"
                console.error(error);
                      }    
            );
        //Navigate from HomeComponent to MovList
        this.successmessage="Data Added In The Table";
    //this.router.navigate(['/getdata']);
}
    
    
    getData(movForm:NgForm):void
    {
        alert (" in getData"+movForm.value);
        console.log("............"+movForm.value);
        console.log(" in home component getData function " +
                this.model.movId+"   "+this.model);
        this.movservice.addMovie(this.model).
        subscribe((movData)=>this.movs=movData,
                (error)=>{
                    this.statusmessage="Problem with service check server"
                    console.error(error);
                          }    
                );
            //Navigate from HomeComponent to MovList
            this.successmessage="Data Added In The Table";
       
       // console.log(this.empskilln);
        //this.emp.eSkills=empForm.controls['gender'].value;
       // console.log(this.emp.eSkills);
    }
    
}
