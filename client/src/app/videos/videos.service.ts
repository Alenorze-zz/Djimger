import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const endpoint = '/api/videos/';

@Injectable()
export class VideoService {
  constructor(private http: Http) { }

  list() {
      return this.http.get(endpoint)
              .map(response => response.json())
              .catch(this.handleError);
  }

  featured() {
      return this.http.get(endpoint + 'featured/')
            .map(response => response.json())
            .catch(this.handleError);
  }
  get(slug) {
      return this.http.get(endpoint + slug + '/')
              .map(response => response.json())
              .catch(this.handleError);
  }

  search(query) {
    const queryString = '?q=${query}';
    this.http.get(endpoint + queryString)
              .map(response => response.json())
              .catch(this.handleError);
  }

  private handleError(error: any, caught: any): any {
      if (error.status === 404) {
        alert('Not found');
      } else {
        alert('Something went wrong. Please try again.')
      }
  }

}
