<<<<<<< HEAD
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MovieService } from './movie.service';

import { Movie } from '../models/movie';

=======
import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

>>>>>>> 184fc33... movie and message services added
describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
<<<<<<< HEAD
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    
  });

  it('should be created', () => {
    const service = TestBed.inject(MovieService);
    expect(service).toBeTruthy();
  });

  it('expects service to fetch the initial movies',
    inject([HttpTestingController, MovieService],
      (httpMock: HttpTestingController, service: MovieService) => {

        service.getMovies().subscribe(data => {
          expect(data.length).toBe(4);
        });

        const req = httpMock.expectOne('api/movies');
        expect(req.request.method).toEqual('GET');

        req.flush(
          [
            {id: 0, title:"Terminator 2: Judgment Day", year:1991, director:"James Cameron", points:10},
            {id: 1, title:"Rocky", year:1976, director:"John G. Avildsen", points:10},
            {id: 2, title:"Escape from New York", year:1981, director:"John Carpenter", points:8},
            {id: 3, title:"The Thing", year:1982, director:"John Carpenter", points:9}
          ]
        );
      })
  );

  it('expects service to fetch a movie by id',
    inject([HttpTestingController, MovieService],
      (httpMock: HttpTestingController, service: MovieService) => {

        const movie: Movie = { id: 1, title:"Rocky", year:1976, director:"John G. Avildsen", points:10 };

        service.getMovie(1).subscribe(data => {
          expect(data).toEqual(movie);
        });

        const req = httpMock.expectOne('api/movies/1');
        expect(req.request.method).toEqual('GET');

        req.flush(
          { id: 1, title:"Rocky", year:1976, director:"John G. Avildsen", points:10 }
        );
      })
  );

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
=======
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
>>>>>>> 184fc33... movie and message services added
});
