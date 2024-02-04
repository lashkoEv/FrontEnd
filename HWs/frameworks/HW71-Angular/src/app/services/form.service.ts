import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private isVisibleProduct = false;
  private isVisibleUser = false;

  constructor() {}

  getVisibilityProduct() {
    return this.isVisibleProduct;
  }

  changeVisibilityProduct() {
    this.isVisibleProduct = !this.isVisibleProduct;
  }

  getVisibilityUser() {
    return this.isVisibleUser;
  }

  changeVisibilityUser() {
    this.isVisibleUser = !this.isVisibleUser;
  }
}
