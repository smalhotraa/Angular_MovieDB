import {Genre} from './Genre';
import {VideoDetails} from './VideoDetails';
import {MovieDetail} from './MovieDetail';
import {Videos} from './Video';

export interface MovieDetailResponse {
  backdrop_path: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: string;
  status: string;
  tagline: string;
  title: string;
  vote_average: string;
  genres: Genre[];
  videos: Videos;
}
