/**
 * Tv show's component class
 *
 * Class that set up the tv shows' component implementation
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */

import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Services' importations
import {TvService} from './../services/tv.service';
import {TmdbImgService} from './../services/tmdb-img.service';
import {EmitterService} from './../emitter';

@Component({selector: 'app-tv', templateUrl: './tv.component.html', styleUrls: ['./tv.component.css']})
export class TvComponent implements OnInit {
  // Class' attributes
  tvShows = [];
  tvID = "";
  tvIDsearch = "";
  public showTvShows = false;
  public showTvDetail = false;
  public showTvDetailSearched = false;
  // Imports' initialization
  constructor(private tvService : TvService, private tmdbImgService : TmdbImgService) {}
  // Tv shows' component initialization
  ngOnInit() {
    this
      .tvService
      .getTvShows()
      .subscribe(response => {
        this.tvShows = response;
        this.showTvShows = true;
        console.log(response);

      });
    EmitterService
      .get("tvDetail")
      .subscribe(data => {
        this.selectTvShowSearched(data)
      });
  }

  /**
   * This method return image's url of TMDB's API
   * @param {string} src
   * @returns {string}
   * @memberof TvComponent
   */
  getImgUrl(src : string) : string {
    return this
      .tmdbImgService
      .getImgUrl(src);
  }

  /**
   * This method set up the component's views and set the tv show's identifier
   * when there's a selection event
   * @param {string} id
   * @memberof TvComponent
   */
  onSelect(id : string) {

    this.showTvShows = false;
    this.showTvDetail = true;
    console.log(id);
    this.tvID = id;
  }

  /**
   * This method set up the component's view and set the tv show's identifier of the
   * selection event on a search
   * @param {string} id
   * @memberof TvComponent
   */
  selectTvShowSearched(id : string) {
    this.showTvShows = false;
    this.showTvDetail = false;
    this.showTvDetailSearched = true;
    this.tvIDsearch = id;
  }

}
