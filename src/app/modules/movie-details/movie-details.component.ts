import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  styleUrls: ['./movie-details.component.scss'],
  templateUrl: './movie-details.component.html'
})

export class MovieDetailsComponent {

  public starsRating: number;
  public language: string;

  constructor(

  ) {

  };

  ngOnInit() {

  }
}
