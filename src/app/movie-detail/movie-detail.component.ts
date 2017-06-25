import { Component, OnInit, Input} from '@angular/core';
import { Observable }        from 'rxjs/Observable';
// Services' imports
import { MovieDetailService } from './../services/movie-detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movieID:string;
  
  movie: Object = {};
  constructor(private movieDetailService: MovieDetailService) { }

  ngOnInit() {
    this.movieDetailService.getMovieInfo(this.movieID).subscribe(response => {
			this.movie = response;
			console.log(response);
		});
  }

}
