import { Injectable } from '@angular/core';
import { Observable, forkJoin, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com/';
  private URLS = [
    '/posts',
    '/comments',
    '/albums',
    '/photos',
    '/todos',
    '/users',
  ];

  constructor() {}

  getAllData(): Observable<any[]> {
    return forkJoin(
      this.URLS.map((url) =>
        fromFetch(`${this.BASE_URL}${url}`).pipe(
          switchMap((response) => response.json())
        )
      )
    );
  }
}
