import { IComponent, IHtmlData } from "../../interfaces";

export class ModalWindow implements IComponent {
  constructor({}: IHtmlData) {}

  getComponent(): HTMLElement {
    throw new Error("Method not implemented.");
  }
}
