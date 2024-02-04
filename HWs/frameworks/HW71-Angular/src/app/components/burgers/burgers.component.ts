import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrl: './burgers.component.css',
})
export class BurgersComponent {
  constructor(private productService: ProductService) {}

  getProducts() {
    return this.productService.getByCategory('burger');
  }
}
