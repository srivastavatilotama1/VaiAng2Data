import { Component,OnInit,Input, SimpleChanges, OnDestroy,OnChanges } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl :'./app.component.html',
})
  

export class AppComponent implements OnInit, OnDestroy { 
    //@Input() title: string;
   // @Input() content: string;

    constructor() { }
    ngOnDestroy(): void {
        console.log('Component Destroy');
    }
    ngOnInit(): void {
        console.log('Component Init');
    }
    
    //used in lesson 4---This concept we need to implement OnChanges 
    /*ngOnChanges(changes: SimpleChanges): void {
        for (let property in changes) {
            if (property === 'title') {
              console.log('Previous:', changes[property].previousValue);
              console.log('Current:', changes[property].currentValue);
            }
          }*/
    }
    


     
