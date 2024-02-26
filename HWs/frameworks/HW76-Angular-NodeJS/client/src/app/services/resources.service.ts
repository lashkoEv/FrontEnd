import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(
    public httpClient:HttpClient
  ) { }

  getContact() {
    return this.httpClient.get("http://localhost:3000/resources");
  }
}
