import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';

<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../../services/movie.service';


=======
>>>>>>> 184fc33... movie and message services added
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  @Input() movie: Movie;

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
  }

}
