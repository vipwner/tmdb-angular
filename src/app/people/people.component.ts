/**
 * People's component class
 *
 * Class that set up the people's component implementation
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {EmitterService} from './../emitter';
// Observable class extensions
import 'rxjs/add/observable/of';
// Services' importations
import {PeopleService} from './../services/people.service';
import {TmdbImgService} from './../services/tmdb-img.service';

@Component({selector: 'app-people', templateUrl: './people.component.html', styleUrls:
['./people.component.scss']})
export class PeopleComponent implements OnInit {
  // Class' attributes
  people = [];
  personID = "";
  personIDsearch = "";
  public showPeople = false;
  public showPeopleDetail = false;
  public showPersonDetailSearched = false;
  title = "Full Cast & Crew";
  // Imports' initializations
  constructor(private peopleService : PeopleService, private tmdbImgService : TmdbImgService) {}

  //People's component initialization
  ngOnInit() {
    this
      .peopleService
      .getPopularPeople()
      .subscribe(response => {
        this.people = response;
        this.showPeople = true;
        console.log(response);
      });
    EmitterService
      .get("personDetail")
      .subscribe(data => {
        console.log("person arrive");
        this.selectPersonSearched(data)
      });
    EmitterService
      .get("showPeople")
      .subscribe(data => {
        this.selectMenuBar(data)
      });
  }

  /**
   * This method set up the component's views and set the person's identifier
   * when there's a person's selection event
   * @param {string} id
   * @memberof PeopleComponent
   */
  onSelect(id : string) {
    this.showPeople = false;
    this.showPeopleDetail = true;
    console.log(id);
    this.personID = id;
    //console.log(person); this.person = person;
  }

  /**
   * This method return the image's url of TMDB's images service
   * @param {string} src
   * @returns {string}
   * @memberof PeopleComponent
   */
  getImgUrl(src : string) : string {
    return this
      .tmdbImgService
      .getImgUrl(src);
  }

  /**
   * This method set up the component's view and set the person's identifier in
   * the selection event, on a search
   * @param {string} id
   * @memberof PeopleComponent
   */
  selectPersonSearched(id : string) {
    this.showPeople = false;
    this.showPeopleDetail = false;
    this.showPersonDetailSearched = true;
    this.personIDsearch = id;
  }
  
  selectMenuBar(id:string){
    this.showPersonDetailSearched=false;
    this.showPeopleDetail=false;
    this.showPeople=true;
  }
}
