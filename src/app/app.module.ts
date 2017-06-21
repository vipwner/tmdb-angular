import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
// New components.
import { NavbarComponent } from './navbar/navbar.component';
// Services.
import { TmdbService } from './services/tmdb.service';
import { TmdbImgService } from './services/tmdb-img.service';
// Routing.
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ContentComponent } from './content/content.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoviesComponent,
    ContentComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TmdbService,
  TmdbImgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
