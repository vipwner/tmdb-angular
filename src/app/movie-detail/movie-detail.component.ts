import { Component, OnInit } from '@angular/core';
// ActivatedRoute
import { Router } from '@angular/router';
import { MovieDetailService } from './movie-detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Object = {};
  title: string = "Movie Detail!"
  //private router:Router, private route: ActivatedRoute
  constructor(private movieDetailService: MovieDetailService) { }
  
  cars = [
    'Ford','Chevrolet','Buick'
  ];


  myData() {
    return 'This is my data, man!';
  }
  
   ngOnInit() {
  //   this.route.params.subscribe((param: any) => {
		// 	let id = param['id'];
		// 	this.movieDetailService.getMovieDetail(id).subscribe(response => {
		// 		this.movie = response;
		// 	}, err => {
		// 		// If movie detail return error, raise 404
		// 		this.router.navigate(['/404']);
  //     });
  //   });

  }
}
