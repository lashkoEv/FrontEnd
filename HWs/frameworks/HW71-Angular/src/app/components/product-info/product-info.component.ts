import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css',
})
export class ProductInfoComponent {
  private product: IProduct;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((param) => {
      this.product = productService.getById(+param['id']);
      return this.product;
    });
  }

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
