import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Movie } from '../../models/movie';

import { MovieService } from '../../services/movie.service';


=======
import { MOVIES } from '../../mock-movies';
import { Movie } from '../../models/movie';

>>>>>>> df878f6... Movie listing done
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

<<<<<<< HEAD
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
  this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.movieService.addMovie({ title } as Movie)
      .subscribe(movie => {
        this.movies.push(movie);
      });
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter(m => m !== movie);
    this.movieService.deleteMovie(movie).subscribe();
  }
=======
  movies = MOVIES;
  selectedMovie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  
onSelect(movie: Movie): void {
  this.selectedMovie = movie;
}
>>>>>>> df878f6... Movie listing done

}
