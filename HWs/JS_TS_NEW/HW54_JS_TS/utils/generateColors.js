import { shuffle } from "./";

export const generateColors = () => {
  const colors = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4];

  shuffle(colors);

  colors.unshift(0);

  return colors;
};
