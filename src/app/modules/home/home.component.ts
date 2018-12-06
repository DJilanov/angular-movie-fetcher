import { Component } from '@angular/core';

import { MovieModel } from '../../models/movie.model';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent {

  public movies: MovieModel[];

  constructor(
    private moviesService: MoviesService,
  ) {
    this.movies = this.moviesService.getMovies();
    this.moviesService.moviesSubscriber.subscribe((movies) => this.setMovies(movies));
  }

  private setMovies(movies) {
    this.movies = movies;
  }
}
