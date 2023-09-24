export class Component {
  #tagName;
  #className;
  #textContent;
  #events;
  #children;

  constructor({ tagName, className, textContent, children, events }) {
    tagName && (this.#tagName = tagName);
    className && (this.#className = className);
    textContent && (this.#textContent = textContent);
    events && (this.#events = events);

    this.#children = [];
    Array.isArray(children) &&
      children.forEach((child) => {
        this.#children.push(child);
      });
  }

  toHTML() {
    this.element = document.createElement(this.#tagName);

    this.element.className = this.#className;

    this.element.textContent = this.#textContent;

    this.#children.forEach((child) => {
      this.element.appendChild(child.toHTML());
    });

    for (const event in this.#events) {
      const action = this.#events[event];
      this.element.addEventListener(event, action);
    }

    return this.element;
  }
}
