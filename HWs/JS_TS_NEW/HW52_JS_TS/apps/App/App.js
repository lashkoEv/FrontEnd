import { getSpinner, getInfoBox } from "../../store";
import { append, render } from "../../core";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

export class App {
  #header;
  #footer;
  #infoBox;

  constructor() {
    append(app, getSpinner());

    this.#header = new Header();
    this.#footer = new Footer();
    this.#infoBox = getInfoBox();
  }

  async load() {
    await this.#header.setButtons();

    render(app, this.#header.component);
    append(app, this.#infoBox.wrapper);
    append(app, this.#footer.component);
  }
}
