import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    
  // TMDB's endpoint for a search in TMDB's API. 
  baseUrl: string = "https://api.themoviedb.org/3/search/multi";
  // Jhon's API-Key
  apiKey: string = "f9f09a70d4cb6d872c1f8aa8bc859cc3";

  constructor(private http: Http) { }
  
  /**
  * Get result of search by given query
  * @return observable with object of: results and total results
  **/
  lookingFor(query: string): Observable<any>{
	
	return this.http.get(`${this.baseUrl}?api_key=${this.apiKey}&query=${query}`)
	.map(response => {
		let json = response.json();
		return {results: json.results, total:json.total_results} ; 
	})
  }
    
}
