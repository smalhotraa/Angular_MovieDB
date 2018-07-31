import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {MovieDetailResponse} from './Models/MovieDetailResponse';
import {CastResponse} from './Models/CastResponse';
import {Movie} from './Models/Movie';
import {MovieResponse} from './Models/MovieResponse';

@Injectable({
  providedIn: 'root'
})
export class FetchmoviedetailsService {

  constructor(private http: HttpClient) { }

  getMovieDetail(id){
    let params = new HttpParams();
    params = params.append('api_key', '63c643047f96b93c103905a07a6a0992');
    params = params.append('append_to_response', 'videos');
    return this.http.get<MovieDetailResponse>('https://api.themoviedb.org/3/movie/' + id , {params: params})
      .pipe(
        catchError(this.handleError)
      );
  }

  getMovieCastList(id) {
   let params = new HttpParams();
   params = params.append('api_key', '63c643047f96b93c103905a07a6a0992');
    return this.http.get<CastResponse>('https://api.themoviedb.org/3/movie/' + id + '/credits', {params: params})
      .pipe(
        catchError(this.handleError)
      );
  }

  getSimilarMovies(id){
    let params = new HttpParams();
    params = params.append('api_key', '63c643047f96b93c103905a07a6a0992');
    return this.http.get<MovieResponse>('https://api.themoviedb.org/3/movie/' + id + '/similar', {params: params})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.message);
    } else {
      console.error('Backend returned code ${error.status}' + 'body was"${error.error}');
    }

    return throwError(
      'Something bad happened');
  }
}
