import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/modules/home/home.module#HomeModule'
  },
  {
    path: 'categories/:category',
    loadChildren: './modules/movie-details/movie-details.module#MovieDetailsModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: false,
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }