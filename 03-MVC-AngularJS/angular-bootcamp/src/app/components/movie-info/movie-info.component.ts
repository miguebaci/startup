import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 729e309... routing done
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../../services/movie.service';


<<<<<<< HEAD
=======
>>>>>>> 184fc33... movie and message services added
=======
>>>>>>> 729e309... routing done
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  @Input() movie: Movie;

<<<<<<< HEAD
<<<<<<< HEAD
  constructor(private route: ActivatedRoute, private movieService: MovieService, private location: Location) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> 184fc33... movie and message services added
=======
  constructor(private route: ActivatedRoute, private movieService: MovieService, private location: Location) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
>>>>>>> 729e309... routing done
  }

}
