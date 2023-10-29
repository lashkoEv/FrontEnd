import { toHTML } from "./toHTML";

export class Component {
  #tagName;
  #className;
  #children;
  #events;
  #textContent;
  #attrs;
  #html;

  constructor({
    tagName,
    className,
    children,
    events,
    textContent,
    html,
    ...attrs
  }) {
    this.#tagName = tagName;
    this.#className = [className];
    this.#textContent = textContent;
    this.#children = children || [];
    this.#events = events;
    this.#attrs = attrs;
    this.#html = html;
  }

  get attributes() {
    return this.#attrs;
  }

  get html() {
    return this.#html;
  }

  get tagName() {
    return this.#tagName;
  }

  get className() {
    return this.#className;
  }

  get children() {
    return this.#children;
  }

  get events() {
    return this.#events;
  }

  get textContent() {
    return this.#textContent;
  }

  setTagName(tagName) {
    this.#tagName = tagName;
  }

  setHTML(html) {
    this.#html = html;
  }

  setClassName(className) {
    this.#className = className;
  }

  addChildren(children) {
    for (const child of children) {
      this.#children.push(child);
    }
  }

  setChildren(children) {
    this.#children = children;
  }

  setEvents(events) {
    this.#events = events;
  }

  setText(textContent) {
    this.#textContent = textContent;
  }

  toHTML() {
    return toHTML(this);
  }
}
