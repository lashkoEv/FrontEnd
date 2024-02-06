import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPeopleContact() {
    return this.http.get('https://swapi.dev/api/people/');
  }

  getPlanetsContact() {
    return this.http.get('https://swapi.dev/api/planets/');
  }

  getFilmsContact() {
    return this.http.get('https://swapi.dev/api/films/');
  }

  getSpeciesContact() {
    return this.http.get('https://swapi.dev/api/species/');
  }

  getVehiclesContact() {
    return this.http.get('https://swapi.dev/api/vehicles/');
  }

  getStarshipsContact() {
    return this.http.get('https://swapi.dev/api/starships/');
  }
}
