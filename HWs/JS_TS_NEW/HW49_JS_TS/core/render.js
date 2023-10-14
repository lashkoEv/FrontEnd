export const render = (parent, component) => {
    [...parent.children].forEach((el) => {
      el.remove();
    });
  
    parent.append(component);
  };
  