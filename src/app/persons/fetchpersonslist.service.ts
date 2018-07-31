import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {PersonsResponse} from './PersonsResponse';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchpersonslistService {

  constructor(private http: HttpClient) {}

  getPersonsList() {
    let params = new HttpParams();
    params = params.append('api_key', '63c643047f96b93c103905a07a6a0992');

    return this.http.get<PersonsResponse>('https://api.themoviedb.org/3/person/popular',{params: params})
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
