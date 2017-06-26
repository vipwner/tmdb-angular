import { Component, OnInit, Input } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
//Service's imports
import { TvDetailService }   from './../services/tv-detail.service';
@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.css']
})
export class TvDetailComponent implements OnInit {
  @Input() tvID:string;
  tvShow: Object= {};
  constructor(private tvDetailService:TvDetailService) { }
  
  ngOnInit() {
     this.tvDetailService.getTvInfo(this.tvID).subscribe(response => {
      console.log("Id tv selected");
      console.log(this.tvID);
			this.tvShow = response;
			console.log(response);
		});
  }

}
