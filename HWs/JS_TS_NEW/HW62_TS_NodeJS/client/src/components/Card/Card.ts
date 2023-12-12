import { Component } from "../../core";
import { IComponent } from "../../interfaces";

export class Card implements IComponent {
  private component: Component;
  private titleDiv: Component;
  private textDiv: Component;
  private authorDiv: Component;

  constructor(title: string, text: string, author: string) {
    this.titleDiv = new Component({
      className: "title",
      textContent: title,
    });

    this.textDiv = new Component({
      className: "text",
      textContent: text,
    });

    this.authorDiv = new Component({
      className: "author",
      textContent: author,
    });

    this.component = new Component({
      className: "card",
      children: [this.getTitleDiv(), this.getTextDiv(), this.getAuthorDiv()],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  getTitleDiv() {
    return this.titleDiv.getComponent();
  }

  getTextDiv() {
    return this.textDiv.getComponent();
  }

  getAuthorDiv() {
    return this.authorDiv.getComponent();
  }
}
