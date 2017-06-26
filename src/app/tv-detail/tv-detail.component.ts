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
@Component({selector: 'app-tv-detail', templateUrl: './tv-detail.component.html', styleUrls: ['./tv-detail.component.css']})
export class TvDetailComponent implements OnInit {

  /**
   * Component's input param - tv show's identifier
   * @type {string}@memberof TvDetailComponent
   */
  @Input()tvID : string;
  // Class' attributes
  tvShow : Object = {};
  // Imports' initialization
  constructor(private tvDetailService : TvDetailService) {}
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

}
