import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MovieModel } from '../../../../models/movie.model';

@Component({
  selector: 'app-movie',
  styleUrls: ['./movie.component.scss'],
  templateUrl: './movie.component.html'
})

export class MovieComponent {

  @Input() public movie: MovieModel;

  constructor(
    private router: Router
  ) {

  }
}
