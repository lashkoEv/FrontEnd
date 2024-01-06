export const append = (parent: HTMLElement, children: HTMLElement | HTMLElement[]) => {
  if (Array.isArray(children)) {
    parent.append(...children);
  } else {
    parent.append(children);
  }
};
