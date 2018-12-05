import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MovieModel } from '../../../../models/movie.model';

@Component({
  selector: 'app-movie',
  styleUrls: ['./movie.component.scss'],
  templateUrl: './movie.component.html'
})

export class MovieComponent {

  public movie: MovieModel;

  constructor(
    private router: Router
  ) {

  }
}
