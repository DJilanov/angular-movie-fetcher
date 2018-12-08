import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesService } from './movies/movies.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MoviesService
  ],
  exports: []
})
export class ServicesModule { }
