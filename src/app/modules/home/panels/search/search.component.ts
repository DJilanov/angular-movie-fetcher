import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MovieModel } from '../../../../models/movie.model';

@Component({
  selector: 'app-search',
  styleUrls: ['./search.component.scss'],
  templateUrl: './search.component.html'
})

export class SearchComponent {

  public movie: MovieModel;

  constructor(
    private router: Router
  ) {

  }
}
