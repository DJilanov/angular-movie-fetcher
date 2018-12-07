import { Component, Input } from '@angular/core';

import { MovieModel } from '../../../../models/movie.model';

@Component({
  selector: 'app-movie-details',
  styleUrls: ['./movie-details.component.scss'],
  templateUrl: './movie-details.component.html'
})

export class MovieDetailsComponent {
  @Input() public movie = new MovieModel();
}
