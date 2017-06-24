import { Component, OnInit, Input } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
// Services' imports
import { PeopleDetailService } from './../services/people-detail.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css'],
 
})
export class PeopleDetailComponent implements OnInit {
  @Input() personID:string;

  actor: Object = {};
  cast: Object[] = [];
	crew: Object[] = [];
	title: string = "Actor Details!"; 
	
  constructor(private peopleDetailService: PeopleDetailService,
		private router: Router) { }

  ngOnInit() {
    this.peopleDetailService.getActorDetails(this.personID).subscribe(response => {
			this.actor = response;
			console.log(response);
		});
  }

  
}
