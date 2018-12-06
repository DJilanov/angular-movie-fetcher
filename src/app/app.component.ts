import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { MoviesService } from './services/movies/movies.service';
import { BackendService } from './core/backend/backend.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public loading: boolean = true;

  constructor(
    private router: Router,
    private moviesService: MoviesService,
    private backendService: BackendService
  ) {
    this.backendService.getMovieSuggestions().subscribe(
      data => this.moviesService.setMovies(data.Search),
      // TODO: Add error handler service
      err => alert(err)
    );
  };
}
