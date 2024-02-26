import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private currentUser: any;

  constructor() {
    this.loadUser();
  }

  loadUser() {
    this.currentUser = localStorage.getItem('user');
  }

  getUser() {
    return this.currentUser;
  }
}
