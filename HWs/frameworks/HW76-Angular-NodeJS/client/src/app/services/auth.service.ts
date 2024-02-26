import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    public httpClient:HttpClient
  ) { }

  validateAuth(body) {
    return this.httpClient.post("http://localhost:3000/auth", body);
  }
}
