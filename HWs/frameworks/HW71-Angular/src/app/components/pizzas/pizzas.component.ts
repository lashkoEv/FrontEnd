import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrl: './pizzas.component.css',
})
export class PizzasComponent {
  constructor(private productService: ProductService) {}

  getProducts() {
    return this.productService.getByCategory('pizza');
  }
}
