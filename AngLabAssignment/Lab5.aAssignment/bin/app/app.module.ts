import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { MovieList }  from './app.movielist';
import { HomeComponent }  from './HomeComponent';
import { MovieSearchComponent }  from './MovieSearchComponent';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes=[
                     { path: '',  redirectTo:'/getdata',pathMatch: 'full'},  
                     { path: 'getdata',  component: MovieList},
                     { path: 'postdata',  component: HomeComponent },
                     {path:'search',component:MovieSearchComponent}
                      ];
@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,MovieList,HomeComponent,MovieSearchComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
