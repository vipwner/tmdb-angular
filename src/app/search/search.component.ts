import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from './../services/search.service';
import { MovieDetailService } from './../services/movie-detail.service';
import {EmitterService} from './../emitter';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	
  // Search's attributes
  query = "";
  matchID = "";
  matchType = "";
  
  results: Object[] = [];
	totalResult: number = 0;
	
  constructor(private searchService:SearchService, private movieDetailService:MovieDetailService) { }

  ngOnInit() {
  }

  /**
	* Given a query, use search service to get results of api
	* If query is empty, clean results and input
	**/
	search(){
		if(this.query){
			this.searchService.lookingFor(this.query).subscribe(response => {
				this.results = response.results;
				console.log(response);
				console.log(response.results);
		
				this.totalResult = response.total;
			});	
		}else{
			//If query is empty, clean results and total results
			this.results = [];
			this.totalResult = 0;
		}
	}
	
	onSelect(id:string, mediaType:string){
	  this.matchID = id;
	  this.matchType = mediaType;
	  console.log(this.matchID);
	  console.log(this.matchType);
	  if (mediaType = "movie")
	  	EmitterService.get("movieDetail").emit(id);
	  else if (mediaType ="person")
	  	EmitterService.get("personDetail").emit(id);
	  else
	   console.log("nothing")
	  
	}
}
