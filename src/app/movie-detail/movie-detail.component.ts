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

@Component({selector: 'app-movie-detail', templateUrl: './movie-detail.component.html', styleUrls: ['./movie-detail.component.css']})

export class MovieDetailComponent implements OnInit {
  /**
   * Component's input param - movie's identifier
   * @type {string}@memberof MovieDetailComponent
   */
  @Input()IdMovie : string;
  // Class' attributes
  movie : Object = {};
  // Imports' initializations
  constructor(private movieDetailService : MovieDetailService) {}

  // Movie-detail's component initialization
  ngOnInit() {

    this
      .movieDetailService
      .getMovieInfo(this.IdMovie)
      .subscribe(response => {
        console.log("Id movie selected");
        console.log(this.IdMovie);
        this.movie = response;
        console.log(response);
      });
  }

}
