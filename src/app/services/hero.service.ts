import { Injectable } from '@angular/core';
// Imports of Heroes and Http step.
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './../partials/hero/hero';
import { HEROES } from './../mocks/mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  
  // Added getHero method - Parameterized step
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
              .then(heroes => heroes.find(hero => hero.id === id));
  }
  
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }
  
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}