import { Injectable } from '@angular/core';

import { Hero } from './../partials/hero/hero';
import { HEROES } from './../mocks/mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
  // getHeroes(): Promise<Hero[]> {
  // return Promise.resolve(HEROES);
  // }
}