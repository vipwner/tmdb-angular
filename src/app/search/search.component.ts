/**
 * Search's component class
 *
 * Class that set up the search's component implementation
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */

import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SearchService} from './../services/search.service';
import {EmitterService} from './../emitter';
import {TmdbImgService} from './../services/tmdb-img.service';
import {MovieHelperService}from './../services/movie.helper';

@Component({selector: 'app-search', templateUrl: './search.component.html', styleUrls: ['./search.component.css']})
export class SearchComponent implements OnInit {

  // Class' attributes
  query = "";
  matchID = "";
  matchType = "";
  isMovie = "movie";
  isTv = "tv";
  isPerson="person";
  results : Object[] = [];
  totalResult : number = 0;
  // Imports' initialization
  constructor(private searchService : SearchService, private tmdbImgService:TmdbImgService, private movieHelper:MovieHelperService ) {}

  ngOnInit() {}

	/**
	 * Given a query, use search's service to get API's results
	 * If query is empty, clean results and input
	 * @memberof SearchComponent
	 */
	search() {
		if (this.query) {
			this
			.searchService
			.lookingFor(this.query)
			.subscribe(response => {
				this.results = response.results;
				console.log(response);
				console.log(response.results);

				this.totalResult = response.total;
			});
		} else {
			//If query is empty, clean results and total results
			this.results = [];
			this.totalResult = 0;
     		}
	}

  /**
   * This method manage event's communication between components for views' display
   * @param {string} id
   * @param {string} mediaType
   * @memberof SearchComponent
  */
  onSelect(id : string, mediaType : string) {
	  console.log(mediaType);
	  this.cleanInput();
	  if (mediaType == "movie") {
		  	EmitterService
			  		.get("movieDetail")
				  	.emit(id);
			      console.log("movie select on search");
	  } else if (mediaType == "person") {
			EmitterService
					.get("personDetail")
					.emit(id);
			    console.log("person selected on search");
	  } else if (mediaType == "tv") {
			EmitterService
					.get("tvDetail")
					.emit(id);
			    console.log("tv selected on search");
    }
  }
  /**
	* Clean query input, results array and total results
	**/
	cleanInput(){
		this.query = "";
		this.results = [];
		this.totalResult = 0;
	}
/**
	* Check it list is empty
	* @param {list} list to be checked
	* @return boolean value of empty state
	**/
	isEmpty(list){
		return this.tmdbImgService.isEmpty(list);
	}

	/**
	* Given a string, return the image url of tmdb api
	* @param {src} Value to cast a tmdb url
	* @return String with url set to tmdb format
	**/
	getImgUrl(src: string): string {
		return this.tmdbImgService.getImgUrl(src);
	}

	/**
	* Get movies names by movies object list 
	* @param {movies} movies object list
	* @return list of strings with movie names
	**/
	getMoviesNames(movies: Object[]): string{
		let moviesList = this.movieHelper.getMoviesNames(movies).join();
		return `${moviesList}...`;
	}

}
