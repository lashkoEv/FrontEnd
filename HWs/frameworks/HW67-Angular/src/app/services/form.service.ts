import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private isVisible = false;

  constructor() {}

  public changeVisibility() {
    this.isVisible = !this.isVisible;
  }

  public getVisibility() {
    return this.isVisible;
  }
}
