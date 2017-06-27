/**
 * People-detail's component class
 *
 * Class that set up the people-detail's component implementation
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */
import {Component, OnInit, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
// Services' importations
import {PeopleDetailService} from './../services/people-detail.service';
import {TmdbImgService} from './../services/tmdb-img.service';

@Component({selector: 'app-people-detail', templateUrl: './people-detail.component.html', styleUrls: ['./people-detail.component.css']})
export class PeopleDetailComponent implements OnInit {

  /**
   * Component's input param - person's identifier
   * @type {string}@memberof PeopleDetailComponent
   */
  @Input()personID : string;

  // Class' attributes
  actor : Object = {};
  cast : Object[] = [];
  crew : Object[] = [];
  title : string = "Actor Details!";
  // Imports' initializations
  constructor(private peopleDetailService : PeopleDetailService, private tmdbImgService:TmdbImgService) {}
  // People-detail's component initialization
  ngOnInit() {
    this
      .peopleDetailService
      .getActorDetails(this.personID)
      .subscribe(response => {
        this.actor = response;
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

}
