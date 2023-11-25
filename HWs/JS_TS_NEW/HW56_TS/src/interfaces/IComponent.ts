import { childrenType, objectType, stringType } from "../types";

export interface IComponent {
  getTagName(): string;
  getClassName(): stringType;
  getChildren(): childrenType;
  getTextContent(): stringType;
  getEvents(): objectType;
  getAttrs(): objectType;

  setTagName(tagName: string): void;
  setClassName(className: stringType): void;
  setChildren(children: childrenType): void;
  setTextContent(textContent: stringType): void;
  setEvents(events: objectType): void;
  setAttrs(attrs: objectType): void;

  toHtml(): HTMLElement;
}
