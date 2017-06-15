import { Injectable } from '@angular/core';

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
}