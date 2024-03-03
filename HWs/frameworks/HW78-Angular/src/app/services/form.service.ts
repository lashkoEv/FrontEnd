import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private isVisible = false;

  constructor() {}

  getVisibility() {
    return this.isVisible;
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }
}
