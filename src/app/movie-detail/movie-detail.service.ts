import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs';

@Injectable()
export class MovieDetailService {
    
/**
* API's URL
**/
baseUrl: string = "https://api.themoviedb.org/3/movie";
/**
* Jhon's API-key
**/
apiKey: string = "6dc0d2605088c01254ffedbd444bc2e4";

constructor() { }

}
