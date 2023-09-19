const task = (...numbers) => {
  const sortedNumbers = numbers.sort((a, b) => a - b);

  const map = new Map();

  for (let i = 0; i < sortedNumbers.length - 1; i++) {
    map.set(sortedNumbers[i], sortedNumbers[i + 1]);
  }

  return map;
};

const app = () => {
  console.log(task(6, 3, 44, 1, 9));
};

app();
