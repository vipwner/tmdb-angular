import { Component } from '@angular/core';
import { Hero } from './partials/hero/hero';
import { HeroService } from './services/hero.service';
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void {
  this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}