/**
 * People-detail's component class
 *
 * Class that set up the people-detail's component implementation
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */
import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
// Services' importations
import {PeopleDetailService} from './../services/people-detail.service';

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
  constructor(private peopleDetailService : PeopleDetailService, private router : Router) {}
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
}
