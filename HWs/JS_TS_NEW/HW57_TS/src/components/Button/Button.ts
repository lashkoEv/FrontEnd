import { IComponent, IHtmlData } from "../../interfaces";

export class Button implements IComponent {
  constructor({}: IHtmlData) {}

  getComponent(): HTMLElement {
    throw new Error("Method not implemented.");
  }
}
