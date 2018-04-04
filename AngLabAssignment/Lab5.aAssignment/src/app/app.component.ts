import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<div><ul>
                           
                            <li><a routerLink="postdata">ADD Movie</a></li>
                            <li><a routerLink="search">Search Movie By category</a></li>
                          </ul>
                      <router-outlet></router-outlet>  </div>`
  
})
export class AppComponent { name = 'Welcome Vaishali To Route App'; }
