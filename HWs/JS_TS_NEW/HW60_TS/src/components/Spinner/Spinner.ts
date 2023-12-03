import { Component } from "../../core";
import { IComponent } from "../../interfaces";

export class Spinner implements IComponent {
  private component: Component;

  constructor() {
    this.component = new Component({
      className: "spinner",
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }
}
