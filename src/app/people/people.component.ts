import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import {EmitterService} from './../emitter';
 
// Observable class extensions
import 'rxjs/add/observable/of';

// Imports service
import { PeopleService } from './../services/people.service';
import { TmdbImgService } from './../services/tmdb-img.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people = [];
  personID = "";
  personIDsearch = "";
  public showPeople = false;
  public showPeopleDetail = false;
  public showPersonDetailSearched = false;
  title = "Full Cast & Crew";
  // Initializes
  constructor(private peopleService: PeopleService, private tmdbImgService:TmdbImgService ) { }
  
  
  ngOnInit() {
    this.peopleService.getPopularPeople().subscribe(response => {
			this.people = response;
			this.showPeople = true;
			console.log(response);
		});
		EmitterService.get("personDetail").subscribe(data => {
		  console.log("person arrive");
    this.selectPersonSearched(data)});
  }
  
  onSelect(id:string){
    this.showPeople = false;
    this.showPeopleDetail = true;
    console.log(id);
    this.personID = id;
    //console.log(person);
    //this.person = person;
  }
  /**
	* This method return the image's url of TMDB's images service
	* @param {src} Value to cast a tmdb url
	* @return String with url set to tmdb format
	**/
	getImgUrl(src: string): string {
		return this.tmdbImgService.getImgUrl(src);
	}
	
  selectPersonSearched(id:string){
    this.showPeople = false;
    this.showPeopleDetail = false;
    this.showPersonDetailSearched = true;
    this.personIDsearch = id;
  }
}
