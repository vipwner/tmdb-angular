import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
// Components.
import { AppComponent }        from './app.component';
import { DashboardComponent } from './partials/dashboard/dashboard.component';
import { HeroDetailComponent } from './partials/hero/hero-detail.component';
import { HeroesComponent }     from './partials/hero/heroes.component';
import { HeroService }         from './services/hero.service';

 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      // Parameterized -- step
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}