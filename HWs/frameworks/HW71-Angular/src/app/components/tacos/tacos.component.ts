import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-tacos',
  templateUrl: './tacos.component.html',
  styleUrl: './tacos.component.css',
})
export class TacosComponent {
  constructor(private productService: ProductService) {}

  getProducts() {
    return this.productService.getByCategory('taco');
  }
}
