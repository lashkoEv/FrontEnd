import { IComponent } from "../interfaces";
import { childrenType, objectType, stringType } from "../types";
import { append } from ".";

export class Component implements IComponent {
  constructor(
    private tagName: string,
    private className?: string,
    private children?: Component[],
    private textContent?: string,
    private events?: {},
    private attrs?: {}
  ) {
    this.tagName = tagName;
    this.className = className;
    this.children = children;
    this.textContent = textContent;
    this.events = events;
    this.attrs = attrs;
  }

  public getTagName(): string {
    return this.tagName;
  }

  public setTagName(tagName: string): void {
    this.tagName = tagName;
  }

  public getClassName(): stringType {
    return this.className;
  }

  public setClassName(className: stringType) {
    this.className = className;
  }

  public getChildren(): childrenType {
    return this.children;
  }

  public setChildren(children: childrenType) {
    this.children = children;
  }

  public getTextContent(): stringType {
    return this.textContent;
  }

  public setTextContent(textContent: stringType) {
    this.textContent = textContent;
  }

  public getEvents(): objectType {
    return this.events;
  }

  public setEvents(events: objectType) {
    this.events = events;
  }

  public getAttrs(): objectType {
    return this.attrs;
  }

  public setAttrs(attrs: objectType) {
    this.attrs = attrs;
  }

  public toHtml(): HTMLElement {
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
