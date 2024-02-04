import { Category } from './../enums/Category';
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
    this.init();
  }

  private init() {
    this.add(
      'Burger',
      'Simple burger',
      20,
      this.getImageByCategory(Category.Burger),
      'burger'
    );
    this.add(
      'Pizza',
      'Simple pizza',
      20,
      this.getImageByCategory(Category.Pizza),
      'pizza'
    );
    this.add(
      'Taco',
      'Simple taco',
      20,
      this.getImageByCategory(Category.Taco),
      'taco'
    );
    this.add(
      'Burger',
      'Simple burger',
      20,
      this.getImageByCategory(Category.Burger),
      'burger'
    );
    this.add(
      'Pizza',
      'Simple pizza',
      20,
      this.getImageByCategory(Category.Pizza),
      'pizza'
    );
    this.add(
      'Taco',
      'Simple taco',
      20,
      this.getImageByCategory(Category.Taco),
      'taco'
    );
    this.add(
      'Burger',
      'Simple burger',
      20,
      this.getImageByCategory(Category.Burger),
      'burger'
    );
    this.add(
      'Pizza',
      'Simple pizza',
      20,
      this.getImageByCategory(Category.Pizza),
      'pizza'
    );
  }

  add(
    title: string,
    description: string,
    price: number,
    url: string,
    category: string
  ) {
    this.products.push(
      new Product(
        this.products.length,
        title,
        description,
        price,
        url || this.getImageByCategory(this.getCategory(category)),
        this.getCategory(category)
      )
    );
  }

  private getCategory(category: string): Category {
    let productCategory: Category;

    switch (category) {
      case 'burger': {
        productCategory = Category.Burger;
        break;
      }
      case 'pizza': {
        productCategory = Category.Pizza;
        break;
      }
      default: {
        productCategory = Category.Taco;
        break;
      }
    }

    return productCategory;
  }

  private getImageByCategory(category: Category) {
    switch (category) {
      case Category.Burger: {
        return 'https://i.pinimg.com/originals/95/aa/34/95aa34722ae9ea7e8faa874e5d24ebab.png';
      }
      case Category.Pizza: {
        return 'https://png.pngtree.com/png-vector/20230331/ourmid/pngtree-gourmet-pizza-cartoon-png-image_6656160.png';
      }
      default: {
        return 'https://static.vecteezy.com/system/resources/previews/025/067/651/non_2x/tacos-with-ai-generated-free-png.png';
      }
    }
  }

  getAll() {
    return [...this.products];
  }

  getByCategory(data: string) {
    const category = this.getCategory(data);

    return this.products.filter(
      (product) => product.getCategory() === category
    );
  }

  getById(id: number) {
    return this.products.find((product) => product.getId() === id);
  }
}
