import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  public isVisible: boolean;

  constructor() {
    this.isVisible = true;
  }

  stopTimer() {
    this.isVisible = false;
  }
}
