import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  constructor(private productService: ProductService) {}

  addProduct(data: any) {
    const isEmptyFields =
      data.label.trim().length > 0 &&
      data.description.trim().length > 0 &&
      data.price &&
      data.date;

    const isCorrectFields =
      ((data.hasDiscount &&
        data.discount &&
        data.discount > 0 &&
        data.discount <= 100) ||
        !data.hasDiscount) &&
      data.price >= 0;

    if (isEmptyFields && isCorrectFields) {
      this.productService.add(
        data.label,
        data.description,
        data.price,
        data.date,
        data.hasDiscount,
        data.discount
      );
    }
  }
}
