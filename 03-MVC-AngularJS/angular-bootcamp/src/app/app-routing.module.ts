import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'info/:id', component: MovieInfoComponent },
  {path:'**', pathMatch:'full', redirectTo: 'movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
