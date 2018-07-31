import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Movie} from './Models/Movie';
import {catchError} from 'rxjs/operators';
import {MovieResponse} from './Models/MovieResponse';

@Injectable({
  providedIn: 'root'
})
export class FetchmoviesService {

  constructor(private http: HttpClient) { }


  getMovies(category,pageNum) {
    let params = new HttpParams();
    params = params.append('api_key', '63c643047f96b93c103905a07a6a0992');
    params = params.append('page',pageNum);
    return this.http.get<MovieResponse>('https://api.themoviedb.org/3/movie/' + category, {params: params})
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
