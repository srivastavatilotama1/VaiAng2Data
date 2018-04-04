import { Component } from '@angular/core';
import { NgForm } from "@angular/Forms/forms";
import { Category } from "./Category";
import { Product} from "./Product";

@Component({
  selector: 'prod-app',
  templateUrl:'./app.prodComponet.html'
})
export class ProductComponent 
{
    prod:Product={ pId:null, pName:null,  pCost:null,  pOnline:null,
            pCatogory:null,   pStores:null  };
    
   cats:Category[]=[
        {catId:1,catName:"Grocery"},                    
        {catId:2,catName:"Mobile"}, 
        {catId:3,catName:"Electronics"}, 
        {catId:4,catName:"Cloths"} ];   
    
    getData(prodForm:NgForm):void
    {
        console.log(prodForm.value);       
       // console.log(this.empskilln);
        //this.emp.eSkills=empForm.controls['gender'].value;
       // console.log(this.emp.eSkills);
    }
  }