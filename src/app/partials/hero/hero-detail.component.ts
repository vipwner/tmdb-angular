// Added OnInit param - Parameterized step
import { Component, Input,  OnInit} from '@angular/core';
// Added this four imports - Parameterized step
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './../../services/hero.service';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})

// Added OnInit implement - Parameterized step
export class HeroDetailComponent implements OnInit{ 
    @Input() hero: Hero;
    
    // Added constructor method - Parameterized step
    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}
    
    // Added ngOnInit method - Parameterized step
    ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
    }
    
    // Added goBack method - Parameterized step
    goBack(): void {
      this.location.back();
    }
}