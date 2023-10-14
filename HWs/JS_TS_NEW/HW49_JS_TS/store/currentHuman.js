let currentHuman = null;

export const setHuman = (human) => {
  currentHuman = human;
};

export const getHuman = () => {
  return currentHuman;
};

export const increaseAge = (age) => {
  if (currentHuman !== null) {
    currentHuman.age += age;
  }
};
