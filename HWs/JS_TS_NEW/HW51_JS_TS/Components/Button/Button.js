import { AdvancedComponent } from "../../core";
import { fetchData, infoBox } from "../../store";

export class Button {
  #component;
  #key;

  constructor(key) {
    this.#key = key || "";

    this.#component = new AdvancedComponent({
      tagName: "button",
      id: this.#key,
      textContent: this.#key,
      events: {
        click: async () => {
          try {
            infoBox.info = await fetchData(this.#key);
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
