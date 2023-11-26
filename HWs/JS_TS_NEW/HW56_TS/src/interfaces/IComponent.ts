import { childrenType, objectType, stringType } from "../types";

export interface IComponent {
  getTagName(): string;
  getClassName(): stringType;
  getChildren(): childrenType;
  getTextContent(): stringType;
  getEvents(): objectType;
  getAttrs(): objectType;

  toHtml(): HTMLElement;
}
