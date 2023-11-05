import { InfoBox, Spinner, Header, Footer } from "../../components";
import { append, render } from "../../core";
import { getData } from "../../utils";

export class Application {
  #URL_BY_DEFAULT = "https://swapi.dev/api/";

  #data;

  #toShow;

  #spinner;
  #infoBox;

  #header;
  #footer;

  #promises;

  constructor() {
    this.#data = null;

    this.#toShow = [];

    this.#spinner = new Spinner();
    this.#infoBox = new InfoBox();

    this.#header = new Header();
    this.#footer = new Footer();

    this.#promises = null;
  }

  async load() {
    this.#data = await getData();

    this.#header.setButtons(Object.keys(this.#data));

    append(app, this.#spinner.component);

    this.#promises = Object.keys(this.#data).map((key) =>
      fetch(this.#URL_BY_DEFAULT + key)
    );

    await Promise.all(this.#promises).then(async (res) => {
      const response = await Promise.all(res.map((pr) => pr.json()));

      Object.keys(this.#data).map(
        (key, i) => (this.#data[key] = response[i].results)
      );
    });

    this.#renderApp();

    this.#initButtonListeners();
  }

  #renderApp() {
    render(app, this.#header.component);
    append(app, this.#infoBox.wrapper);
    append(app, this.#footer.component);
  }

  #initButtonListeners() {
    for (const button of this.#header.buttons) {
      button.component.addEventListener("click", () => {
        button.isActive = !button.isActive;

        if (button.isActive) {
          button.component.className += "--active";

          this.#toShow = this.#toShow.concat(this.#data[button.key]);
        } else {
          button.component.className = "button";

          for (let el of this.#data[button.key]) {
            const index = this.#toShow.indexOf(el);
            this.#toShow.splice(index, 1);
          }
        }

        this.#showData();
      });
    }
  }

  #showData() {
    append(app, this.#spinner.component);

    setTimeout(() => {
      this.#infoBox.info = this.#toShow;

      this.#spinner.component.remove();
    }, 4000);
  }
}
