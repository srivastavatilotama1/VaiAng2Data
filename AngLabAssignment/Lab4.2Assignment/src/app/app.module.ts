import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { BookList }  from './app.BookListComponent';
import { BookData }  from './bookSerCom';
import { SearchPipe }  from './filter';
import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule ],
  declarations: [ AppComponent,BookList,SearchPipe],
  bootstrap:    [ AppComponent ],
  providers:    [BookData]
})
export class AppModule { }
