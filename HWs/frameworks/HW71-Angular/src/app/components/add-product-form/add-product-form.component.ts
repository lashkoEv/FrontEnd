import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.css',
})
export class AddProductFormComponent {
  constructor(
    private productService: ProductService,
    private formService: FormService
  ) {}

  add(data: any) {
    const isNotEmptyFields =
      data.title.trim().length > 0 &&
      data.description.trim().length > 0 &&
      data.price &&
      data.type;

    if (isNotEmptyFields) {
      this.productService.add(
        data.title,
        data.description,
        data.price,
        '',
        data.type
      );

      this.formService.changeVisibilityProduct();
    }
  }

  getVisibility() {
    return this.formService.getVisibilityProduct();
  }
}
