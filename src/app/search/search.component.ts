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

@Component({selector: 'app-search', templateUrl: './search.component.html', styleUrls: ['./search.component.css']})
export class SearchComponent implements OnInit {

		// Class' attributes
		query = "";
		matchID = "";
		matchType = "";
		results : Object[] = [];
		totalResult : number = 0;
		// Imports' initialization
		constructor(private searchService : SearchService) {}

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

}
