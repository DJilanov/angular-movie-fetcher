import { Component, EventEmitter } from '@angular/core';
import { debounceTime, switchMap } from 'rxjs/operators';

import { BackendService } from '../../core/backend/backend.service';

import { MovieModel } from '../../models/movie.model';

enum SearchStatus {
  empty = 'Type to search',
  fetching = 'Fetching data...',
}

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent {

  public typeahead = new EventEmitter<string>();
  public selectedMovie: number;
  public notFoundText: string = SearchStatus.empty;
  public movies: MovieModel[] = [];

  constructor(
    private backendService: BackendService
  ) {
    this.typeahead
      .pipe(
          debounceTime(200),
          switchMap(term => {
            this.notFoundText = SearchStatus.fetching;
            return this.backendService.getMovieSuggestions(term)
          })
      )
      .subscribe((response) => {
        if(response.Error) {
          this.movies.length = 0;
          this.notFoundText = response.Error
        } else {
          this.movies = response.Search;
        }
      }, (err) => {
          console.log('error', err);
          this.movies = [];
          alert(`Fetching error: ${err}`);
      });
  }

  public onSelect() {
    this.backendService.getSpecificMovie(this.movies[this.selectedMovie].imdbID)
      .subscribe((response: any) => {
        if(!response.Error) {
          this.movies[this.selectedMovie] = response;
        }
      }, (err) => {
          console.log('error', err);
          this.movies = [];
          alert(`Fetching error: ${err}`);
      });
  }
}
