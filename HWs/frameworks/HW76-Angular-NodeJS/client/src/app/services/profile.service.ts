import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private currentUser: any;
  private isVisibleModal: boolean;

  constructor() {
    this.loadUser();
  }

  loadUser() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  getUser() {
    return this.currentUser;
  }

  getImageUrl() {
    return '../../assets/user.svg';
  }

  getVisibility() {
    return this.isVisibleModal;
  }

  changeVisibility() {
    this.isVisibleModal = !this.isVisibleModal;
  }

  edit(data: any) {}
}
