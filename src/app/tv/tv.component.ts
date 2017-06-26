import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
import { TvService }         from './../services/tv.service';
import { TmdbImgService } from './../services/tmdb-img.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  
  tvShows = [];
  tvID = "";
  tvIDsearch = "";
  public showTvShows = false;
  public showTvDetail = false;
  public showTvDetailSearched = false;
  
  constructor(private tvService:TvService, private tmdbImgService:TmdbImgService) { }

  ngOnInit() {
    this.tvService.getTvShows().subscribe(response => {
						this.tvShows = response;
						this.showTvShows =true;
						console.log(response);
						
    });
  }
   /**
	* This method return image's url of TMDB's API.
	* @param {src} 
	* @return String with image's url formatted.
	**/
	getImgUrl(src: string): string {
		return this.tmdbImgService.getImgUrl(src);
  }
  
  onSelect(id:string){
    
    this.showTvShows = false;
    this.showTvDetail = true;
    console.log(id);
    this.tvID = id;
  }

}
