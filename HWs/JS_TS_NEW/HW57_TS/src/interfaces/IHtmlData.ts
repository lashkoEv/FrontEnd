import { Component } from "../core";

export interface IHtmlData {
  tagName?: string;
  className?: string;
  children?: Component[];
  textContent?: string;
  events?: {};
  attrs?: {};
}
