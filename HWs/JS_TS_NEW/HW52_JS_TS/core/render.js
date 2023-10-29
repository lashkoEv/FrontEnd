// Remove old information / node / children ...
// then put there new children / node / element ...
export const render = (node, elements) => {
  // take node , then split it
  const children = node.children;

  [...children].forEach((child) => {
    child.remove();
  });

  if (Array.isArray(elements)) return node.append(...elements);
};
