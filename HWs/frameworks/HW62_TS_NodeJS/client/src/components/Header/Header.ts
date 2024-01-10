import { Button } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";

export class Header implements IComponent {
  private component: Component;

  private addButton: Button;

  constructor(addEvents: {}) {
    this.addButton = new Button({
      textContent: "Add new post",
      events: addEvents,
    });

    this.component = new Component({
      tagName: "header",
      className: "header",
      children: [this.getAddButton()],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  getAddButton() {
    return this.addButton.getComponent();
  }
}
