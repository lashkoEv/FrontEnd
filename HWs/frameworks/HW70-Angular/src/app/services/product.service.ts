import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { Product } from '../schemas/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: IProduct[];

  constructor() {
    this.products = [];
  }

  public add(
    label: string,
    description: string,
    price: number,
    date: Date,
    hasDiscount: boolean,
    discount: number | null
  ) {
    this.products.push(
      new Product(label, description, price, date, hasDiscount, discount)
    );
  }

  getAll() {
    return [...this.products];
  }
}
