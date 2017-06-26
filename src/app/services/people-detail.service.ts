/**
 * People-detail's service class
 *
 * Class that set up the people-detail's service implementation
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */
 
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleDetailService {
  // TMDB's endpoint for people's information request
  baseUrl : string = "https://api.themoviedb.org/3/person";
  // Jhon's API-Key
  apiKey : string = "f9f09a70d4cb6d872c1f8aa8bc859cc3";  constructor(private http : Http) {}  /**
  /*
   * This method return actor's information.
   * @param {id} Actor's identifier.
   **/
  getActorDetails(id : string) : Observable < any > {
    return this
  	.http
  	.get(`${this.baseUrl}/${id}?api_key=${this.apiKey}`)
  	.map(response => {
  		return response.json();
  	})
  }
  /**
   * Get actor cast of tmdb api
   **/
  getCastActor(id : string) : Observable < any > {
    let creditsUrl: string = '/movie_credits';
	return this
		.http
    	.get(`${this.baseUrl}/${id}${creditsUrl}?api_key=${this.apiKey}`)
		.map(response => {
			return response
			.json()
			.cast;
		})
  }

  /**
	* Get actor crew of tmdb api
	**/
  getCrewActor(id : string) : Observable < any > {
      let creditsUrl: string = '/movie_credits';
	  return this
	  .http
	  .get(`${this.baseUrl}/${id}${creditsUrl}?api_key=${this.apiKey}`)
	  .map(response => {
	  return response
	  .json()
	  .crew;
	  })
  }
}
