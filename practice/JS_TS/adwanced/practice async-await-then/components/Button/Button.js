import { AdvancedComponent, append } from "../../core";
import { fetchData, getInfoBox, getSpinner } from "../../store";

export class Button {
  #component;
  #key;
  #URL;

  constructor(key) {
    this.#key = key || "";

    this.#URL = `https://swapi.dev/api/${this.#key}`;

    this.#component = new AdvancedComponent({
      tagName: "button",
      id: this.#key,
      textContent: this.#key,
      events: {
        click: async () => {
          try {
            append(app, getSpinner());

            getInfoBox().info = await fetchData(this.#URL);

            getSpinner().remove();
          } catch (e) {
            console.error(e);
          }
        },
      },
    });
  }

  get component() {
    return this.#component;
  }

  get key() {
    return this.#key;
  }
}
