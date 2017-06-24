import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
// New components.
import { NavbarComponent } from './navbar/navbar.component';
// Services.
import { TmdbService } from './services/tmdb.service';
import { TmdbImgService } from './services/tmdb-img.service';
import { PeopleService } from './services/people.service';
import { PeopleDetailService } from './services/people-detail.service';
// Routing.
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ContentComponent } from './content/content.component';
// AnchorScroll import
import {ScrollToModule} from 'ng2-scroll-to';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoviesComponent,
    ContentComponent,
    PeopleComponent,
    PeopleDetailComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ScrollToModule.forRoot()
  ],
  providers: [TmdbService,
  TmdbImgService,
  PeopleService,
  PeopleDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
