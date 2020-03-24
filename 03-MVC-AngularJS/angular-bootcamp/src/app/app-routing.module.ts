import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
<<<<<<< HEAD
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';

=======
>>>>>>> 729e309... routing done

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'info/:id', component: MovieInfoComponent },
<<<<<<< HEAD
  { path: 'edit/:id', component: MovieEditComponent },
  { path: 'add', component: MovieAddComponent },
=======
>>>>>>> 729e309... routing done
  {path:'**', pathMatch:'full', redirectTo: 'movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
