// 1. Напишите функцию, при вызове которой в консоль выдается кол-во дней до следующего нового года. Выполнить задание нужно используя объект Date.
// Ваша функция должна быть уже вызвана в вашем коде.

const task1 = () => {
  const dayInMs = 86400000;

  const currentDate = new Date();

  const newYear = new Date(`December, 31 ${currentDate.getFullYear()}`);

  console.log(Math.ceil((newYear - currentDate) / dayInMs));
};

task1();

// 2. Напишите бесконечный генератор RGB цветов. (цвета рандомятся)

const getRandomNumber = () => {
  return Math.floor(Math.random() * 256);
};

function* colors() {
  while (true) {
    yield `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
  }
}

const task2 = () => {
  const iterator = colors();
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
};

task2();
