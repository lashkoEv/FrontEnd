import { getSpinner, getInfoBox } from "../../store";
import { AdvancedComponent, Component, append, render } from "../../core";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components";

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

    setTimeout(this.#getAdvertising, 4000);
  }

  #getAdvertising() {
    const loginInput = new AdvancedComponent({
      tagName: "input",
    });

    const passwordInput = new Component({
      tagName: "input",
    });

    const closeBtn = new AdvancedComponent({
      tagName: "button",
      className: "button",
      textContent: "Close",
      events: {
        click: () => {
          form.remove();
        },
      },
    });

    const form = new AdvancedComponent({
      tagName: "div",
      className: "form",
      children: [loginInput, passwordInput, closeBtn],
      events: {
        change: () => {
          if (loginInput.value.includes("@")) {
            loginInput.classList.add("green");
            passwordInput.classList.add("green");
          } else {
            loginInput.classList.add("red");
            passwordInput.classList.add("red");
          }
        },
      },
    });

    append(app, form);
  }
}
