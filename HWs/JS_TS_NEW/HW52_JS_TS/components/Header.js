import { Component, toHTML } from "../core";
import { render } from "../core/render";

export class Header extends Component {
  constructor({ tagName, className, children, events, textContent, ...attrs }) {
    super({ tagName, className, children, events, textContent, ...attrs });
    this.setTagName("header");
    this.setClassName("header");
  }
}
