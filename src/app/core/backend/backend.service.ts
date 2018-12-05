import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from 'environments/environment';
@Injectable()
export class BackendService {
  constructor(
    private http: Http
  ) { }
  /**
  * @getMovies get all movies
  * @return {Array} [movie]
  */
  public getMovies() {
    return this.http.get(environment.apiUrl + '');
  }
}
