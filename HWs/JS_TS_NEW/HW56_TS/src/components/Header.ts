import { Button } from ".";
import { Component } from "../core";

export class Header {
  private component: Component;

  constructor(addButtonEvents: {}, removeButtonEvents: {}) {
    const addButton = new Button({
      textContent: "Add",
      events: addButtonEvents,
    });

    const removeButton = new Button({
      textContent: "Remove",
      events: removeButtonEvents,
    });

    this.component = new Component({
      tagName: "header",
      className: "header",
      children: [addButton.getComponent(), removeButton.getComponent()],
    });
  }

  getComponent(): Component {
    return this.component;
  }
}
