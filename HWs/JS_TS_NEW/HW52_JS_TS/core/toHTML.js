import { Component } from "./Component";

export const toHTML = (instance) => {
  if (instance instanceof Component) {
    const {
      attributes,
      children,
      textContent,
      tagName,
      className,
      events,
      html,
      //
    } = instance;

    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = textContent;
    element.events = events;

    if (!children) return element;

    if (html) element.insertAdjacentHTML("afterbegin", html);

    if (events) {
      for (let key in events) {
        element.addEventListener(key, events[key]);
      }
    }

    if (attributes) {
      for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
      }
    }

    for (const child of children) {
      if (
        child instanceof Component &&
        !child.toString().includes("HTMLElement")
      ) {
        element.append(child.toHTML());
      } else {
        element.append(child);
      }
    }

    return element;
  }
  return "There isn't any instance of class Component.";
};
