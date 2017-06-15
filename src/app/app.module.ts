import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
// Added htttp's import.
import { HttpModule }     from '@angular/http';

// Imports for Simulate the web api step.
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

// Components.
import { AppComponent }        from './app.component';
import { DashboardComponent } from './partials/dashboard/dashboard.component';
import { HeroDetailComponent } from './partials/hero/hero-detail.component';
import { HeroesComponent }     from './partials/hero/heroes.component';
import { HeroService }         from './services/hero.service';
import { AppRoutingModule }     from './app-routing.module';

 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [ HeroService  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}