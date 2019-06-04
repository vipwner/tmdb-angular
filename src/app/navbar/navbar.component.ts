/**
 * Navbar's component class
 *
 * Class that set up the navbar's component implementation
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */

import {Component, OnInit} from '@angular/core';
import {EmitterService} from './../emitter';

@Component({selector: 'navbar', templateUrl: './navbar.component.html', styleUrls:
['./navbar.component.scss']})
export class NavbarComponent implements OnInit {
  

  ngOnInit() {}
  onSelect(id:string){
    if(id =='1'){
      EmitterService
	      .get("showMovies")
		  .emit(id);
		  console.log("show popular movies");
    }else if (id=='2'){
      EmitterService
	      .get("showPeople")
		  .emit(id);
		  console.log("show popular people");
    }else if (id=='3'){
      EmitterService
	      .get("showTv")
		  .emit(id);
		  console.log("show popular tv shows");
    }
    
  }
}
