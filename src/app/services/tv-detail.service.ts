import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TvDetailService {
   // TMDB's endpoint for movie's information request
  baseUrl: string = "https://api.themoviedb.org/3/tv";
  // Jhon's API-Key
  apiKey: string = "f9f09a70d4cb6d872c1f8aa8bc859cc3";
  constructor(private http:Http) { }
  
  /**
	* This method returns tv show's information.
	* @param {id} Tv show's identifier in the TMDB's API.
	* @return Http's response in Observable.
	**/
	getTvInfo(id: string): Observable<any>{
		return this.http.get(`${this.baseUrl}/${id}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json(); 
		})
	}
    

}
