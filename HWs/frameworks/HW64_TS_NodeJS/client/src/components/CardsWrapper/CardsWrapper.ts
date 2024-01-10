import { Card } from "..";
import { Component, render } from "../../core";
import { IComponent } from "../../interfaces";

export class CardsWrapper implements IComponent {
  private component: Component;

  constructor() {
    this.component = new Component({
      className: "cards",
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  setCards(cards: Card[]) {
    const cardComponents = cards.map((card) => card.getComponent());

    render(this.getComponent(), cardComponents);
  }
}
