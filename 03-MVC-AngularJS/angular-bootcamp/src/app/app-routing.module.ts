import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';

=======
>>>>>>> 729e309... routing done
=======
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';

>>>>>>> e3bba9b... add edit delete movie components done

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'info/:id', component: MovieInfoComponent },
<<<<<<< HEAD
<<<<<<< HEAD
  { path: 'edit/:id', component: MovieEditComponent },
  { path: 'add', component: MovieAddComponent },
=======
>>>>>>> 729e309... routing done
=======
  { path: 'edit/:id', component: MovieEditComponent },
  { path: 'add', component: MovieAddComponent },
>>>>>>> e3bba9b... add edit delete movie components done
  {path:'**', pathMatch:'full', redirectTo: 'movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
