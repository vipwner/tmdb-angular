import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TvService {
  //TMDB's endpoint for tv's requests.
  baseUrl: string = "https://api.themoviedb.org/3/tv";
  //Jhon's API-Key
  apiKey: string = "f9f09a70d4cb6d872c1f8aa8bc859cc3";
  

  constructor(private http:Http) { }
  
  getTvShows():Observable<any>{
    let urlPopular = '/popular';
  	return this.http.get(`${this.baseUrl}${urlPopular}?api_key=${this.apiKey}`)
  	.map(response => {
  		return response.json().results; 
  	})
  }  
}
