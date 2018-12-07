import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { MovieDetailsComponent } from './panels/movie-details/movie-details.component';
import { HomeComponent } from './home.component';

import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgSelectModule,
    FormsModule,
    SharedModule
  ],
  exports: [

  ],
  declarations: [
    MovieDetailsComponent,
    HomeComponent
  ]
})
export class HomeModule { }
