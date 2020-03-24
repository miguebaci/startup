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
import { MessageService } from '../../services/message.service';

>>>>>>> 184fc33... movie and message services added
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

<<<<<<< HEAD
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
=======
  movies: Movie[];
>>>>>>> 184fc33... movie and message services added
  selectedMovie: Movie;

  constructor(private movieService: MovieService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  
onSelect(movie: Movie): void {
  this.selectedMovie = movie;
  this.messageService.add(`MovieService: Selected movie id=${movie.id}`);
}

getMovies(): void {
  this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
}
>>>>>>> df878f6... Movie listing done

}
