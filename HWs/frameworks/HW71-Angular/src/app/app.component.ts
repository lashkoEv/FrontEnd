import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'HW71-Angular';

  constructor(private p: ProductService) {}

  getP() {
    return this.p.getAll();
  }
}
