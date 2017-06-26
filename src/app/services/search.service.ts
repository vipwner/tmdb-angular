/**
 * Search's service class
 *
 * Class that set up the search's service implementation
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  // TMDB's endpoint for a search in TMDB's API.
  baseUrl : string = "https://api.themoviedb.org/3/search/multi";
  // Jhon's API-Key
  apiKey : string = "f9f09a70d4cb6d872c1f8aa8bc859cc3";

  constructor(private http : Http) {}

  /**
   * This method bring the results of a query search on the TMDB's API
   * @param {string} query
   * @returns {Observable < any >}
   * @memberof SearchService
   */
  lookingFor(query : string) : Observable < any > {

    return this
      .http
      .get(`${this.baseUrl}?api_key=${this.apiKey}&query=${query}`)
      .map(response => {
        let json = response.json();
        return {results: json.results, total: json.total_results};
      })
  }

}
