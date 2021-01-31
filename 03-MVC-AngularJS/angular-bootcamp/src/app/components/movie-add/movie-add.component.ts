import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

import { MovieService } from '../../services/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService, private location: Location) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
  this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  add(title: string, year: number, director: string, points: number): void {
    title = title.trim();
    director = director.trim();

    if (!title || !year || !director || !points) { return; }
    this.movieService.addMovie({ title, year, director, points } as Movie)
      .subscribe(movie => {
        this.movies.push(movie);
        this.goBack();
      });
  }
  goBack(): void {
    this.location.back();
  }

}
