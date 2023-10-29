import { Component } from "../core";
export class Spinner extends Component {
  constructor({ tagName, className, children, events, textContent, ...attrs }) {
    super({ tagName, className, children, events, textContent, ...attrs });
    this.setTagName("div");
    this.setClassName("spinner");
  }
}

export default Spinner;
