import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailComponent }   from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies',  component: MovieDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}