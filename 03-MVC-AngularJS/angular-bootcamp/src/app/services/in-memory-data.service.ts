import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from '../models/movie';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {id: 0, title:"Terminator 2: Judgment Day", year:1991, director:"James Cameron", points:10},
      {id: 1, title:"Rocky", year:1976, director:"John G. Avildsen", points:10},
      {id: 2, title:"Escape from New York", year:1981, director:"John Carpenter", points:8},
<<<<<<< HEAD
<<<<<<< HEAD
      {id: 3, title:"The Thing", year:1982, director:"John Carpenter", points:9}];
=======
      {id: 3, title:"The Thing", year:1982, director:"John Carpenter", points:9}];;
>>>>>>> e3bba9b... add edit delete movie components done
=======
      {id: 3, title:"The Thing", year:1982, director:"John Carpenter", points:9}];
>>>>>>> af529b2... jasmine+karma test
    return {movies};
  }
  
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}
