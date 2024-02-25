import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private isVisible: boolean;

  constructor() {
    this.isVisible = false;
  }

  getVisibility() {
    return this.isVisible;
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }
}
