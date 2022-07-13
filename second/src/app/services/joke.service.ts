import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // this means the service is injectable in whole application
})
export class JokeService {

  constructor(private http: HttpClient) { } // injected http dependency in component

  getJoke() {
    return this.http.get('https://api.chucknorris.io/jokes/random'); // returns an observable
  }

}
