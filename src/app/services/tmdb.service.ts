import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TmdbService {

//TMDB's endpoint for requests.
baseUrl: string = "https://api.themoviedb.org/3/movie";
//Jhon's API-Key
apiKey: string = "f9f09a70d4cb6d872c1f8aa8bc859cc3";

public showMovies = false;
  public showMovieDetail = false;

constructor(private http: Http) { }
      
getMovies():Observable<any>{
    let urlPopular = '/popular';
	return this.http.get(`${this.baseUrl}${urlPopular}?api_key=${this.apiKey}`)
	.map(response => {
		return response.json().results; 
	})
}  

}
