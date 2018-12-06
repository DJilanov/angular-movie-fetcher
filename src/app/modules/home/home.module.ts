import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './panels/movie/movie.component';
import { SearchComponent } from './panels/search/search.component';
import { HomeComponent } from './home.component';

import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    SharedModule
  ],
  exports: [

  ],
  declarations: [
    MovieComponent,
    SearchComponent,
    HomeComponent
  ]
})
export class HomeModule { }
