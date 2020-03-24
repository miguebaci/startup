import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs/operators';
=======
import { MOVIES } from '../mock-movies';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
>>>>>>> 184fc33... movie and message services added

@Injectable({
  providedIn: 'root'
})
export class MovieService {
<<<<<<< HEAD
  
  private moviesUrl = 'api/movies';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getMovies (): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
      .pipe(tap(_ => this.log('fetched movies')),
        catchError(this.handleError<Movie[]>('getMovies', []))
      );
  }

  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
  return this.http.get<Movie>(url).pipe(
    tap(_ => this.log(`fetched movie id=${id}`)),
    catchError(this.handleError<Movie>(`getMovie id=${id}`))
  );
  }

  private log(message: string) {
    this.messageService.add(`MovieService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updateMovie (movie: Movie): Observable<any> {
    return this.http.put(this.moviesUrl, movie, this.httpOptions).pipe(
      tap(_ => this.log(`updated movie id=${movie.id}`)),
      catchError(this.handleError<any>('updateMovie'))
    );
  }

  addMovie (movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions).pipe(
      tap((newMovie: Movie) => this.log(`added movie w/ id=${newMovie.id}`)),
      catchError(this.handleError<Movie>('addMovie'))
    );
  }

  deleteMovie (movie: Movie | number): Observable<Movie> {
    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `${this.moviesUrl}/${id}`;
  
    return this.http.delete<Movie>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted movie id=${id}`)),
      catchError(this.handleError<Movie>('deleteMovie'))
    );
=======

  constructor(private messageService: MessageService) { }

  getMovies(): Observable<Movie[]> {
    this.messageService.add('MovieService: fetched movies');
    return of(MOVIES);
>>>>>>> 184fc33... movie and message services added
  }
}
