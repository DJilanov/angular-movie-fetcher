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
    private backendService: BackendService
  ) {
    this.backendService.getMovies().subscribe(
      // data => this.productsService.setProducts(data.json()),
      // err => this.errorHandlerService.handleRequestError(err)
    );
  };
}
