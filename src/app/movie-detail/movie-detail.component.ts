/**
 * Movie-detail's component class
 *
 * Class that set up the movie's detail implementation
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */

// Core importations
import {Component, OnInit, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
// Services' importations
import {MovieDetailService} from './../services/movie-detail.service';
import {MovieHelperService} from '../services/movie.helper';
import {TmdbImgService} from './../services/tmdb-img.service';
import {EmitterService} from './../emitter';
import { Movie } from '../logical/movie';

@Component({selector: 'app-movie-detail', templateUrl: './movie-detail.component.html', styleUrls: ['./movie-detail.component.css']})

export class MovieDetailComponent implements OnInit {
  /**
   * Component's input param - movie's identifier
   * @type {string}@memberof MovieDetailComponent
   */
  @Input()IdMovie : string;
  // Class' attributes
  //movie : Object = {};
  movie: Movie;
  //video: Object = {};
  video;
  // Imports' initializations
  constructor(private movieDetailService : MovieDetailService, private tmdbImgService:TmdbImgService, private movieHelper:MovieHelperService) {}

  // Movie-detail's component initialization
  ngOnInit() {

    this
      .movieDetailService
      .getMovieInfo(this.IdMovie)
      .subscribe(response => {
        console.log("Id movie selected");
        this.movie = response;
      });
    this
      .movieDetailService
      .getMovieVideos(this.IdMovie)
      .subscribe(response => {
				this.video = response[0];
      });
  }
  
  /**
	* Given a list of objects, return the property name of any object in other list
	* @param {list} List of objects to get name property
	* @return List of strings with name property of any object of list
	**/
	getNamesList(list: Object[]): string[]{
		return this.tmdbImgService.getNamesList(list);
	}

  /**
   * This method return image's url of TMDB's API
   * @param {string} src
   * @returns {string}
   * @memberof MoviesComponent
   */
  getImgUrl(src : string) : string {
    return this
      .tmdbImgService
      .getImgUrl(src);
  }

	/**
	* Get youtube embebed url for youtube id
	* @param {value} youtube id to be cast to youtube embebed url
	* @return youtube embeber url format
	**/
	getMovieVideoUrl(value: string):string{
		return this.movieHelper.getMovieVideoUrl(value);
	}

  goBack(id:string){
    EmitterService
					.get("showMovies")
					.emit(id);
  }
}
