/**
 * Tv-detail's component class
 *
 * Class that set up the tv-detail's component implementation
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */

import {Component, OnInit, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
//Services' importations
import {TvDetailService} from './../services/tv-detail.service';
import {TmdbImgService} from './../services/tmdb-img.service';
import {EmitterService} from './../emitter';
import { Tv } from '../logical/tv';
@Component({selector: 'app-tv-detail', templateUrl: './tv-detail.component.html', styleUrls: ['./tv-detail.component.css']})
export class TvDetailComponent implements OnInit {

  /**
   * Component's input param - tv show's identifier
   * @type {string}@memberof TvDetailComponent
   */
  @Input()tvID : string;
  // Class' attributes
  tvShow : Tv;
  // Imports' initialization
  constructor(private tvDetailService : TvDetailService, private tmdbImgService:TmdbImgService) {}
  // Tv-detail's component initialization
  ngOnInit() {
    this
      .tvDetailService
      .getTvInfo(this.tvID)
      .subscribe(response => {
        console.log("Id tv selected");
        console.log(this.tvID);
        this.tvShow = response;
        console.log(response);
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

  goBack(id:string){
    EmitterService
					.get("showTv")
					.emit(id);
  }
}
