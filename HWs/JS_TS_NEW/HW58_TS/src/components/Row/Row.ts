import { Component } from "../../core";
import { IComponent } from "../../interfaces";

export class Row implements IComponent {
  private component: Component;
  private secondCell: Component;

  constructor(firstCellText: string, secondCellText: string) {
    const firstCell = new Component({
      textContent: firstCellText,
    }).getComponent();

    this.secondCell = new Component({
      textContent: secondCellText,
    });

    this.component = new Component({
      className: "row",
      children: [firstCell, this.secondCell.getComponent()],
    });
  }

  getComponent(): HTMLElement {
    return this.component.getComponent();
  }

  changeTextInSecondCell(text: string) {
    this.secondCell.getComponent().textContent = text;
  }
}
