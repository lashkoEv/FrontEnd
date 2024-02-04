import { getProducts } from './../../../../../../JS_TS_NEW/HW59_TS/src/utils/getProducts';
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  constructor(private productService: ProductService) {}

  getProducts() {
    return this.productService.getAll();
  }
}
