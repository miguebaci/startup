import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { Movie } from '../../models/movie';

import { MovieService } from '../../services/movie.service';


=======
import { MOVIES } from '../../mock-movies';
import { Movie } from '../../models/movie';

>>>>>>> df878f6... Movie listing done
=======
import { Movie } from '../../models/movie';

import { MovieService } from '../../services/movie.service';

<<<<<<< HEAD
>>>>>>> 184fc33... movie and message services added
=======

>>>>>>> 729e309... routing done
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
  movies: Movie[];
<<<<<<< HEAD

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
=======
  movies: Movie[];
>>>>>>> 184fc33... movie and message services added
  selectedMovie: Movie;
=======
>>>>>>> e3bba9b... add edit delete movie components done

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
  this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
<<<<<<< HEAD
}
>>>>>>> df878f6... Movie listing done
=======
  }
>>>>>>> 729e309... routing done

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

}
