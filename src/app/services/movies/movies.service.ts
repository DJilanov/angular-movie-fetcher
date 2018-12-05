import { Injectable, EventEmitter } from '@angular/core';

import { MovieModel } from '../../models/movie.model';

@Injectable()

/**
 * @MoviesService used on all connections to the back-end for the drivers
 */
export class MoviesService {

  private movies = [];
  /**
  * @getMovies get all Movies
  * @return {Array} all Movies
  */
  public getMovies() {
    return this.movies;
  }

  public setMovies(movies: MovieModel[]) {
    this.movies = movies;
    this.emitMovies();
  }

  /**
  * @emitCategories emit the categories to the components
  */
  public emitMovies() {
    // TODO: emit that there is change
  }
}
