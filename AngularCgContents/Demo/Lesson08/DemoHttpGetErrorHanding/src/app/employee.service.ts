import { Injectable }      from '@angular/core';
import {IEmployee} from './employee';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
//import "rxjs/add/operator/throw"
@Injectable()
export class EmployeeService{
   
    constructor(private http:Http) {
	
}
    
    getAllEmployee():Observable<IEmployee[]> 
{ return  this.http.get("http://localhost:9090/SpringWithAngular/rest/employee").
        map((response:Response)=><IEmployee[]>response.json())
        .catch(this.handleError);
    }
    handleError(error: Response){
        console.error(error);
        return Observable.throw(error);
    }
}