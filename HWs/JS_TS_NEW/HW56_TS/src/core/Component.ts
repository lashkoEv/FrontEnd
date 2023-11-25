import { IComponent, IComponentInput } from "../interfaces";
import { childrenType, objectType, stringType } from "../types";
import { append } from ".";

export class Component implements IComponent {
  private tagName: string;
  private className?: string;
  private children?: Component[];
  private textContent?: string;
  private events?: {};
  private attrs?: {};

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
  }

  public getTagName() {
    return this.tagName;
  }

  public setTagName(tagName: string) {
    this.tagName = tagName;
  }

  public getClassName() {
    return this.className;
  }

  public setClassName(className: stringType) {
    this.className = className;
  }

  public getChildren() {
    return this.children;
  }

  public setChildren(children: childrenType) {
    this.children = children;
  }

  public getTextContent() {
    return this.textContent;
  }

  public setTextContent(textContent: stringType) {
    this.textContent = textContent;
  }

  public getEvents() {
    return this.events;
  }

  public setEvents(events: objectType) {
    this.events = events;
  }

  public getAttrs() {
    return this.attrs;
  }

  public setAttrs(attrs: objectType) {
    this.attrs = attrs;
  }

  public toHtml() {
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
}
