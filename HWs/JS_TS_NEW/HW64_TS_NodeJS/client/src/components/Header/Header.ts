import { Button, Select } from "..";
import { Component } from "../../core";
import { IComponent } from "../../interfaces";

export class Header implements IComponent {
  private component: Component;

  private addButton: Button;
  private select: Select;

  constructor(addEvents: {}, selectValues: string[], selectEvents: {}) {
    this.addButton = new Button({
      textContent: "Add product",
      events: addEvents,
    });

    this.select = new Select(selectValues, selectEvents);

    this.component = new Component({
      tagName: "header",
      className: "header hide",
      children: [this.getAddButton(), this.getSelect()],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  getAddButton() {
    return this.addButton.getComponent();
  }

  getSelect() {
    return this.select.getComponent();
  }

  getSelectValue() {
    return +this.getSelect().value;
  }

  show() {
    this.getComponent().classList.toggle("hide");
  }
}
