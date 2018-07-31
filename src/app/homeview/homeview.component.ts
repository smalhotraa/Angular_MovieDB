import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { MatToolbar } from '@angular/material';
import {FetchmoviesService} from '../fetchmovies.service';
import {Movie} from '../Models/Movie';
import {HttpErrorResponse} from '@angular/common/http';
import {MovieResponse} from '../Models/MovieResponse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css']
})
export class HomeviewComponent implements OnInit {
  constructor(private movieservice: FetchmoviesService,
  private route: ActivatedRoute) {

    this.map.set('popular', 'Popular');
    this.map.set('now_playing', 'Now Playing');
    this.map.set('top_rated', 'Top Rated');
    this.map.set('upcoming', 'Upcoming');
  }

  movieresponse: MovieResponse;
  movies: Movie[];
  categoriesToDisplay: string[] = ['Popular', 'Now Playing', 'Top Rated', 'Upcoming'];
  map: Map<string, string> = new Map<string, string>();
  pageNum = 0;
  categorySelected;
  progressOn: boolean;

  ngOnInit() {

   const mRoute = this.route.routeConfig.path;
    this.progressOn = true;
    if (mRoute === 'home') {
      this.getMovies('popular', this.pageNum);
      this.categorySelected = 'Popular';
    } else {
      this.getMovies(mRoute, this.pageNum);
      this.categorySelected = this.map.get(mRoute);
    }
  //  console.log(this.route.routeConfig.path);
  }

  getMovies(category, pageNum) {
    pageNum++;
    this.movieservice.getMovies(category, pageNum)
      .subscribe( (movieresponse) => {this.movieresponse = movieresponse;
  //        this.displayMovieData();
          this.movies = movieresponse.results;
  //        window.scrollTo(0, 0);
          this.progressOn = false;
        },
        (err: HttpErrorResponse) => {
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

  displayMovieData() {
    let i = 0;
    console.log('display movie titles');
    for (i = 0; i < this.movieresponse.results.length; ++i) {
      console.log('Movie title - ', this.movieresponse.results[i].title);
    }
  }

  onCategorySelected(category: string) {
    this.categorySelected = category;
    console.log(this.categorySelected);
    // this.getMovies(this.categorySelected);
  }
}
