/**
 * Tmdb-img's service class
 *
 * Class that set up the tmdb-img's service implementation
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class TmdbImgService {
  // Class' attributes
  baseUrl: string = "http://image.tmdb.org/t/p/w300/";
  default:string = "assets/img/default.jpg";
  constructor() { }
  /**
   * This method return the image url from TMDB's API
   * Return the deafult image if src is null or undefined
   * @param {src} 
   * @return String 
   * @memberof TmdbImgService
   **/
  getImgUrl(src: string): string {
    if(src){
	  return `${this.baseUrl}${src}`;	
	}
	  return this.default;
	}

  /**
   * This method the property name of any object in list
   * @param {list} 
   * @return List 
   * @memberof TmdbImgService
   **/
  getNamesList(list: Object[]): string[]{
    let result: string[] = []
	if(list){
	  for(let object of list){
	    result.push(object['name']);
	  }	
	}
	  return result;
  }

  /**
   * This method checks if list is empty
   * @param {list} 
   * @return boolean
   * @memberof TmdbImgService
   **/
  isEmpty(list): boolean{
    let result: boolean = true;
	if(list){
	  result = list.length == 0;
	}
	return result;
  }
}
