import { Component } from "../../core";
import { IComponent } from "../../interfaces";

export class Timer implements IComponent {
  private MAX_COUNT: number = 10;

  private component: Component;
  private number: Component;
  private count: number;

  constructor() {
    this.count = this.MAX_COUNT;

    this.number = new Component({
      className: "number",
      textContent: this.count.toString(),
    });

    this.component = new Component({
      className: "timer",
      children: [this.number.getComponent()],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  decreaseTime() {
    this.number.getComponent().textContent = this.count.toString();
    
    this.count = --this.count;

    return this.count;
  }

  reset() {
    this.count = this.MAX_COUNT;
  }
}
