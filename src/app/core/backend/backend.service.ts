import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map} from 'rxjs/operators';

import { environment } from 'environments/environment';
@Injectable()
export class BackendService {
  constructor(
    private http: Http
  ) { }
  /**
  * @getMovies get all movies suggestions
  * @return {Array} [movie]
  */
  public getMovieSuggestions(text = 'Guardians') {
    return this.http.get(environment.apiUrl + `&s=${text}`)
      .pipe(
        map(res => JSON.parse(res.text()))
      );
  }
  /**
  * @getMovies get all movies suggestions
  * @return {Array} [movie]
  */
  public getSpecificMovie(id) {
    return this.http.get(environment.apiUrl + `&i=${id}`)
      .pipe(
        map(res => JSON.parse(res.text()))
      );
  }
}
