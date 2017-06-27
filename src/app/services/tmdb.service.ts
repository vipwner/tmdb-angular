/**
 * Tmdb's service class
 *
 * Class that set up the tv tmdb's service implementation
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */
 
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TmdbService {

    // TMDB's endpoint for requests.
    baseUrl: string = "https://api.themoviedb.org/3/movie";
    //Jhon's API-Key
    apiKey: string = "f9f09a70d4cb6d872c1f8aa8bc859cc3";


    constructor(private http: Http) { }
  
    /**
     * This method get the popular movies from the TMDB's API
     * @returns {Observable<any>}
     * @memberof TvService
     */    
    getMovies():Observable<any>{
      let urlPopular = '/popular';
      return this.http.get(`${this.baseUrl}${urlPopular}?api_key=${this.apiKey}`)
      .map(response => {
      	return response.json().results; 
      })
    }  

}
