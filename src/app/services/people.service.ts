import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {

  // TMDB's endpoint for people's information request
  baseUrl: string = "https://api.themoviedb.org/3/person";
  // Jhon's API-Key
  apiKey: string = "f9f09a70d4cb6d872c1f8aa8bc859cc3";
  
  constructor(private http:Http) { }
  
  getPopularPeople(): Observable<any>{
      let popularUrl = '/popular';
      return this.http.get(`${this.baseUrl}${popularUrl}?api_key=${this.apiKey}`)
      .map(response => {
			return response.json().results; 
		})
  }
}
