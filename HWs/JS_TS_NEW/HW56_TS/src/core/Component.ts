import { IComponent, IComponentInput } from "../interfaces";
import { append } from ".";

export class Component implements IComponent {
  private tagName: string;
  private className?: string;
  private children?: Component[];
  private textContent?: string;
  private events?: {};
  private attrs?: {};

  private component: HTMLElement;

  constructor({
    tagName,
    className,
    children,
    textContent,
    events,
    attrs,
  }: IComponentInput) {
    this.tagName = tagName || "div";
    this.className = className;
    this.children = children;
    this.textContent = textContent;
    this.events = events;
    this.attrs = attrs;

    this.component = this.toHtmlElement();
  }

  public getTagName() {
    return this.tagName;
  }

  public getClassName() {
    return this.className;
  }

  public getChildren() {
    return this.children;
  }

  public getTextContent() {
    return this.textContent;
  }

  public getEvents() {
    return this.events;
  }
  public getAttrs() {
    return this.attrs;
  }

  private toHtmlElement() {
    const component = document.createElement(this.tagName);

    component.className = this.className || "";

    component.textContent = this.textContent || "";

    if (this.children) {
      this.children.forEach((child) => {
        append(component, child.toHtml());
      });
    }

    if (this.events) {
      for (const event in this.events) {
        component.addEventListener(event, this.events[event]);
      }
    }

    if (this.attrs) {
      for (const attr in this.attrs) {
        component[attr] = this.attrs[attr];
      }
    }

    return component;
  }

  public toHtml(): HTMLElement {
    return this.component;
  }
}
