// Added OnInit - Update the HeroesComponent class step
import { Component , OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './../../services/hero.service';
// Added import - Update the HeroesComponent class step
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:['./heroes.component.css']
})
// Added OnInit - Update the HeroesComponent class step
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private router: Router, private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}