import { Component } from "../../core";
import { IComponent } from "../../interfaces";
import { Product } from "../../schemas";

export class Card implements IComponent {
  private component: Component;

  constructor(product: Product) {
    const title = new Component({
      tagName: "h3",
      className: "title",
      textContent: product.getTitle(),
    }).getComponent();

    const description = new Component({
      tagName: "p",
      className: "description",
      textContent: product.getDescription(),
    }).getComponent();

    const price = new Component({
      tagName: "p",
      className: "price",
      textContent: product.getPrice(),
    }).getComponent();

    const image = new Component({
      tagName: "img",
      className: "image",
      attrs: {
        src: product.getImageUrl(),
      },
    }).getComponent();

    this.component = new Component({
      className: "product",
      children: [image, title, description, price],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
