import { Component } from "../../core";
import { IComponent } from "../../interfaces";

export class Card implements IComponent {
  private component: Component;

  private image: Component;
  private titleDiv: Component;
  private descriptionDiv: Component;
  private newPriceDiv: Component;
  private oldPriceDiv: Component;

  constructor(
    title: string,
    description: string,
    newPrice: number,
    oldPrice: number
  ) {
    this.image = new Component({
      tagName: "img",
      className: "image",
      attrs: {
        src: "/public/images/image.png",
      },
    });

    this.titleDiv = new Component({
      className: "title",
      textContent: title,
    });

    this.descriptionDiv = new Component({
      className: "description",
      textContent: description,
    });

    this.newPriceDiv = new Component({
      className: "new-price",
      textContent: `${newPrice} $`,
    });

    this.oldPriceDiv = new Component({
      className: "old-price",
      textContent: oldPrice !== -1 ? `${oldPrice} $` : "",
    });

    const price = new Component({
      className: "price",
      children: [this.getNewPriceDiv(), this.getOldPriceDiv()],
    }).getComponent();

    this.component = new Component({
      className: "card",
      children: [this.getImage(), this.getTitleDiv(), this.getDescriptionDiv(), price],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  getImage() {
    return this.image.getComponent();
  }

  getTitleDiv() {
    return this.titleDiv.getComponent();
  }

  getDescriptionDiv() {
    return this.descriptionDiv.getComponent();
  }

  getNewPriceDiv() {
    return this.newPriceDiv.getComponent();
  }

  getOldPriceDiv() {
    return this.oldPriceDiv.getComponent();
  }
}
