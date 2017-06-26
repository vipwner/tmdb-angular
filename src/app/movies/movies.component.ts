import { Component, OnInit } from '@angular/core';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

 
// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { TmdbService } from './../services/tmdb.service';
import { TmdbImgService } from './../services/tmdb-img.service';
import { EmitterService } from './../emitter';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
 
  movies = [];
  public movieIDsearch = "";
  public showMovies = false;
  public showMovieDetail = false;
  public showMovieDetailSearched = false;
  public movieID = "";
  // Initializes
  constructor(private tmdbService:TmdbService,
  private tmdbImgService:TmdbImgService) { }

  ngOnInit() {
    this.tmdbService.getMovies().subscribe(response => {
						this.movies = response;
						this.showMovies =true;
						console.log(response);
						
    });
     EmitterService.get("movieDetail").subscribe(data => {
    this.selectMovieSearched(data)});
  }
  
  /**
	* This method return image's url of TMDB's API.
	* @param {src} 
	* @return String with image's url formatted.
	**/
	getImgUrl(src: string): string {
		return this.tmdbImgService.getImgUrl(src);
  }
 
 onSelect(id:string){
    
    this.showMovies = false;
    this.showMovieDetail = true;
    console.log(id);
    this.movieID = id;
  }
  
  selectMovieSearched(id:string){
    
    this.showMovies = false;
    this.showMovieDetail = false;
    this.showMovieDetailSearched = true;
    console.log("Selected id");
    console.log(id);
    this.movieIDsearch = id;
  }
 
}
