import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailsComponent } from './movie-details.component';

import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: MovieDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    SharedModule,
  ],
  exports: [

  ],
  declarations: [
    MovieDetailsComponent
  ]
})
export class MovieDetailsModule { }
