import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent {

  public movies: MovieModel[];

  constructor(
    private router: Router
  ) {

  }
}
