import { isArray } from "../utils";

export const render = (parent, component) => {
  [...parent.children].forEach((el) => {
    el.remove();
  });

  if (isArray(component)) {
    parent.append(...component);
  } else {
    parent.append(component);
  }
};
