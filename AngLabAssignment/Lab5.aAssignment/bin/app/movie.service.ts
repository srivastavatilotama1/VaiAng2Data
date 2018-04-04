import { Injectable }      from '@angular/core';
import {Movie} from './movie';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
//import "rxjs/add/operator/throw"
@Injectable()
export class MovieService
{
       constructor(private http:Http) {}
  //For All Application check your your REST URI-PORT & Path   
    //GET ALL -with Spring JPA-http://localhost:8082/Lab5SpringWithJpa/rest/employee
    getAllMovie():Observable<Movie[]> 
    {
        return  this.http.get("http://localhost:8082/Lab5_A_SpringAngJPA/rest/movie").
                map((response:Response)=><Movie[]>response.json())
                .catch(this.handleError);
    }
    
    handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error);
    }    
    //add data--with Spring JPA-http://localhost:8082/SpringWithJpa/rest/movie/create/
   addMovie(data:Movie): Observable<Movie[]> 
    {
            let movData=JSON.stringify(data);
            alert("in service................"+movData);
            let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: cpHeaders });
            return this.http
                .post('http://localhost:8082/Lab5_A_SpringAngJPA/rest/movie/create/',movData,options)
                .map((success => success.status))
                .catch(this.handleError);
    }
       //search data--with Spring JPA-http://localhost:8082/SpringWithJpa/rest/movie/search/
            searchMovieId(data:number): Observable<Movie[]> 
            {
                console.log(data)
                return this.http
                    .get('http://localhost:8082/Lab5_A_SpringAngJPA/rest/movie/search/'+data)
                    .map((response:Response)=><Movie[]>response.json())
                    .catch(this.handleError);
           }
  
                   
                    searchMovieByCate(data:string): Observable<Movie[]> 
                    {
                        console.log(data)
                        return this.http
                            .get('http://localhost:8082/Lab5_A_SpringAngJPA/rest/movie/search/'+data)
                            .map((response:Response)=><Movie[]>response.json())
                            .catch(this.handleError);
                   }
    }
