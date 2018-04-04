import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule }  from '@angular/forms';
import {EmployeeComponent} from  './app.employeeform';


@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,EmployeeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
