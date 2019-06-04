/**
 * Movies' component class
 *
 * Class that set up the movies' component implementation
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
// Services' importations
import {TmdbService} from './../services/tmdb.service';
import {TmdbImgService} from './../services/tmdb-img.service';
import {EmitterService} from './../emitter';
@Component({selector: 'app-movies', templateUrl: './movies.component.html', styleUrls:
['./movies.component.scss']})
export class MoviesComponent implements OnInit {

  // Class' attributes
  public movies = [];
  public movieIDsearch = "";
  public showMovies = false;
  public showMovieDetail = false;
  public showMovieDetailSearched = false;
  public movieID = "";
  // Imports' initializations
  constructor(private tmdbService : TmdbService, private tmdbImgService : TmdbImgService) {}

  /**
   * Movies' component initialization
   * @memberof MoviesComponent
   */
  ngOnInit() {
    this
      .tmdbService
      .getMovies()
      .subscribe(response => {
        this.movies = response;
        this.showMovies = true;
        console.log(response);

      });
    EmitterService
      .get("movieDetail")
      .subscribe(data => {
        this.selectMovieSearched(data)
      });
    EmitterService
      .get("showMovies")
      .subscribe(data => {
        this.selectMenuBar(data)
      });
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
   * This method set up the component's views and set the movie's identifier
   * when there's a selection event
   * @param {string} id
   * @memberof MoviesComponent
   */
  onSelect(id : string) {

    this.showMovies = false;
    this.showMovieDetail = true;
    console.log(id);
    this.movieID = id;
  }

  /**
   * This method set up the component's view and set the movie's identifier of the
   * selection event on a search
   * @param {string} id
   * @memberof MoviesComponent
   */
  selectMovieSearched(id : string) {

    this.showMovies = false;
    this.showMovieDetail = false;
    this.showMovieDetailSearched = true;
    console.log("Selected id");
    console.log(id);
    this.movieIDsearch = id;
  }
  
  selectMenuBar(id:string){
    this.showMovieDetail = false;
    this.showMovieDetailSearched = false;
    this.showMovies =true;
  }
}
