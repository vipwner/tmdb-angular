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
  @Input() IdMovie:string;
  
  movie: Object = {};
  constructor(private movieDetailService: MovieDetailService) { }

  ngOnInit() {
    this.movieDetailService.getMovieInfo(this.IdMovie).subscribe(response => {
      console.log("Id movie selected");
      console.log(this.IdMovie);
			this.movie = response;
			console.log(response);
		});
  }

}
