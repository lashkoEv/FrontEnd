import { Component, append } from "../../core";
import { IComponent } from "../../interfaces";

import "./Main.css";

export class Main implements IComponent {
  private component: Component;

  constructor() {
    this.component = new Component({
      tagName: "main",
      className: "main",
    });
  }

  add(child: HTMLElement) {
    append(this.getComponent(), child);
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
