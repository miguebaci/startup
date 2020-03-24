import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../../mock-movies';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = MOVIES;
  selectedMovie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  
onSelect(movie: Movie): void {
  this.selectedMovie = movie;
}

}
