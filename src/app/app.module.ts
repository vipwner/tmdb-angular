import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// New components.
import { NavbarComponent } from './navbar/navbar.component';
// Services.
import { TmdbService } from './services/tmdb.service';
import { TmdbImgService } from './services/tmdb-img.service';
import { PeopleService } from './services/people.service';
import { PeopleDetailService } from './services/people-detail.service';
import { MovieDetailService } from './services/movie-detail.service';
import { SearchService } from './services/search.service';
import { TvService } from './services/tv.service';
import { TvDetailService } from './services/tv-detail.service';
// Routing.
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ContentComponent } from './content/content.component';
// AnchorScroll import
import {ScrollToModule} from 'ng2-scroll-to';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchComponent } from './search/search.component';
import { TvComponent } from './tv/tv.component';
import { TvDetailComponent } from './tv-detail/tv-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoviesComponent,
    ContentComponent,
    PeopleComponent,
    PeopleDetailComponent,
    MovieDetailComponent,
    SearchComponent,
    TvComponent,
    TvDetailComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    FormsModule
  ],
  providers: [TmdbService,
  TmdbImgService,
  PeopleService,
  PeopleDetailService,
  MovieDetailService,
  SearchService,
  TvService,
  TvDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
