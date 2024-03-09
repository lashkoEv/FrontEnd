// * 1. создайте функцию получающую массив и возвращающая новый без дубликатов.

const task1 = (arr) => {
  return Array.from(new Set(arr));
};

console.log(task1([1, 2, 3, 3, 2]));

// * 2. создайте функцию, принимающую строку и возвращающую bool:
// *    - true - если строка палиндром
// *    - false - если нет

const task2 = (str) => {
  const strMap = new Map();

  for (let i = 0; i < str.length / 2; i++) {
    strMap.set(str[i], str[str.length - i - 1]);
  }

  let isPalindrome = true;

  strMap.forEach((key, val) => {
    if (key !== val) {
      isPalindrome = false;
    }
  });

  return isPalindrome;
};

console.log(task2("abba"));
console.log(task2("abbb"));
console.log(task2("abcddca"));

// * 3. создайте функцию, принимающую любое кол-во чисел и возвращающую Map, в котором
// *    ключи и значения это переданные числа в функцию, по принципу возрастания. Числа
// *    будут по цепочке ссылаться на следюущее число по старшенству.

// Пример:

//   f(6,3,44,1,9) -> Map { 1 -> 3, 3 -> 6, 6 -> 9, 9 -> 44 }

const task3 = (...numbers) => {
  const sortedNumbers = numbers.sort((a, b) => a - b);

  const map = new Map();

  for (let i = 0; i < sortedNumbers.length - 1; i++) {
    map.set(sortedNumbers[i], sortedNumbers[i + 1]);
  }

  return map;
};

console.log(task3(6, 3, 44, 1, 9));
