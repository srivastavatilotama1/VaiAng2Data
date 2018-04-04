import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.parentProdComp';
import { FormsModule }  from '@angular/forms';
import {ProductComponent} from  './app.prodComponet';


@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,ProductComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
