import { Component, Input } from '@angular/core';
import { Product } from '../../schemas/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() private product: Product;

  getProduct() {
    return this.product;
  }

  getTitle() {
    return this.product.getTitle();
  }

  getDescription() {
    return this.product.getDescription();
  }

  getPrice() {
    return this.product.getPrice();
  }

  getUrl() {
    return this.product.getImgUrl();
  }

  getId() {
    return this.product.getId();
  }
}
