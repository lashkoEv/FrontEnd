import { Component } from "../../core";
import { IComponent } from "../../interfaces";
import { StringField } from "../../types";

export class Field implements IComponent {
  private component: Component;

  private numberComponent: Component;
  private letterComponent: Component;
  private figureComponent: Component;

  constructor(number: StringField, letter: StringField, figure: StringField, color: string) {
    this.numberComponent = new Component({
      className: "number",
      textContent: number,
    });

    this.letterComponent = new Component({
      className: "letter",
      textContent: letter,
    });

    this.figureComponent = new Component({
      tagName: "img",
      className: "figure",
      attrs: {
        src: figure,
      },
    });

    this.component = new Component({
      className: `field ${color}`,
      children: [
        this.getNumberComponent(),
        this.getLetterComponent(),
        this.getFigureComponent(),
      ],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  getNumberComponent() {
    return this.numberComponent.getComponent();
  }

  getLetterComponent() {
    return this.letterComponent.getComponent();
  }

  getFigureComponent() {
    return this.figureComponent.getComponent();
  }
}
