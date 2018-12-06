import { Injectable, EventEmitter } from '@angular/core';

import { MovieModel } from '../../models/movie.model';

@Injectable()

/**
 * @MoviesService used on all connections to the back-end for the drivers
 */
export class MoviesService {

  private movies = [];
  public moviesSubscriber: EventEmitter<any>;

	constructor() {
    this.moviesSubscriber = new EventEmitter();
  }

  /**
  * @getMovies get all Movies
  * @return {Array} all Movies
  */
  public getMovies() {
    return this.movies;
  }

  /**
  * @setMovies set all Movies
  * @return {Array} all Movies
  */
  public setMovies(movies: MovieModel[]) {
    if(Array.isArray(movies)) {
      this.movies = movies;
    } else {
      this.movies = [movies];
    }
    this.emitMovies();
  }

  /**
  * @emitMovies emit the movies to the components
  */
  public emitMovies() {
		this.moviesSubscriber.emit(this.movies);
  }
}
