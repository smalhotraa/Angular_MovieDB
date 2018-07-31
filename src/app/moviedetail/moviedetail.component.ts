import { Component, OnInit } from '@angular/core';
import {FetchmoviedetailsService} from '../fetchmoviedetails.service';
import { ActivatedRoute } from '@angular/router';
import {MovieDetailResponse} from '../Models/MovieDetailResponse';
import {HttpErrorResponse} from '@angular/common/http';
import { Location } from '@angular/common';
import {CastResponse} from '../Models/CastResponse';
import {MovieResponse} from '../Models/MovieResponse';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  constructor(private fetchMovieDetails: FetchmoviedetailsService,
              private route: ActivatedRoute,
              private location: Location) {
    console.log('constructor called');
  }
  id: string;
  movieDetails: MovieDetailResponse;
  castListResponse: CastResponse;
  movieResponse: MovieResponse;
  progressOn: boolean;
  genres = '';

  ngOnInit() {
    this.progressOn = true;
    this.id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe(param =>{
      this.id = param.get('id');
      this.genres = '';
      this.getMovieDetails(this.id);
      this.getMovieCastList(this.id);
      this.getSimilarMovies(this.id);
    });

    console.log('id = ', this.id);
  }

  getSimilarMovies(id) {
    this.progressOn = true;
    this.fetchMovieDetails.getSimilarMovies(id)
      .subscribe((movieresponse) => {
        this.movieResponse = movieresponse;
        console.log('akjfljflkfj', movieresponse);
        this.progressOn = false;
      }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this.progressOn = false;
          console.log('Client-side error occured');
          console.log(err.message);
        } else {
          this.progressOn = false;
          console.log('Server-side error');
        }
      });
  }

  getMovieCastList(id) {
    this.progressOn = true;
    this.fetchMovieDetails.getMovieCastList(id)
      .subscribe((castdetails) => {
        this.castListResponse = castdetails;
        console.log(this.castListResponse);
        this.progressOn = false;
      }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this.progressOn = false;
          console.log('Client-side error occured');
          console.log(err.message);
        } else {
          this.progressOn = false;
          console.log('Server-side error');
        }
      });
  }

  getMovieDetails(id) {
    this.fetchMovieDetails.getMovieDetail(id)
      .subscribe((moviedetails) => {
        this.movieDetails = moviedetails;
        console.log(this.movieDetails);
        this.displayData();
        this.setUpData();
        this.progressOn = false;
      }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this.progressOn = false;
          console.log('Client-side error occured');
          console.log(err.message);
        } else {
          this.progressOn = false;
          console.log('Server-side error');
        }
      });
  }

  goBack() {
    this.location.back();
  }

  setUpData() {
    for (let i = 0; i < this.movieDetails.genres.length; ++i) {
      console.log('lalalal', this.movieDetails.genres[i].name);
      this.genres += this.movieDetails.genres[i].name + ', ';
    }
    this.genres = this.genres.substring(0, this.genres.length - 2);
  }

  openDialog(video) {
    window.open('https://www.youtube.com/watch?v=' + video.key, '_blank' );
  }

  displayData() {
    console.log('Genres - ', this.movieDetails.genres);
    console.log('Videos - ', this.movieDetails.videos);
    console.log('movie - ', this.movieDetails.backdrop_path);
    console.log('movie - ', this.movieDetails.overview);
  }
}
