import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { BookList }  from './app.BookListComponent';
import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule ],
  declarations: [ AppComponent,BookList],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
