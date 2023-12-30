import { Component } from "../../core";
import { IComponent } from "../../interfaces";

export class Header implements IComponent {
  private component: Component;

  constructor() {
    const icon = new Component({
      tagName: "img",
      attrs: {
        src: "/icon.png",
      },
    }).getComponent();

    const title = new Component({
      tagName: "h3",
      textContent: "TODO LIST",
    }).getComponent();

    this.component = new Component({
      tagName: "header",
      className: "header",
      children: [icon, title],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
