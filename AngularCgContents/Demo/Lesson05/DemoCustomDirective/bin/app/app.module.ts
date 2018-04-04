import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MyOwnDirective }  from './app.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,MyOwnDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
