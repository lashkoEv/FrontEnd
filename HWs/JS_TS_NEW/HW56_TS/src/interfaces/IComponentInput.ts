import { Component } from "../core";

export interface IComponentInput {
  tagName?: string;
  className?: string;
  children?: Component[];
  textContent?: string;
  events?: {};
  attrs?: {};
}
