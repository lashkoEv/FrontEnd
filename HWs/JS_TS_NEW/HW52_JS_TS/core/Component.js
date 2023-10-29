import { isArray, isExisting } from "../utils";

export class Component {
  constructor({ tagName = "div", className, children }) {
    const element = document.createElement(tagName);

    className && (element.className = className);

    if (!children || !isArray(children)) return element;

    element.append(...children);

    return element;
  }
}

export class AdvancedComponent extends Component {
  constructor({ tagName, className, children, events, html, ...attrs }) {
    super({ tagName, className, children });

    if (isExisting(attrs)) {
      for (const attr in attrs) {
        this[attr] = attrs[attr];
      }
    }

    isExisting(html) && this.insertAdjacentHTML(html.position, html.text);

    if (isExisting(events)) {
      for (const event in events) {
        this.addEventListener(event, events[event]);
      }
    }

    if (!children || !isArray(children)) return this;

    this.append(...children);

    return this;
  }
}
