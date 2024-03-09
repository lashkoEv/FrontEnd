/*
 * Task 1
 * 1. напишите функцию с 2мя параметрами. 1й параметр -  id элемента(строка), 2й - любой текст(строка).
 * Функция должна выбрать на странице элемент по указанному id и записать в него переданный(2й параметр функции) текст.
 */

const setText = (id, text) => {
  const element = document.getElementById(id);
  element.textContent = text;
};

setText("text", "Task 1");

/*
 * Task 2
 * напишите фабрику, которая при вызове создаст на странцие элемент(любой тег на ваш выбор), с рандомным текстом рандомной длины(символы для текста и макс длину выбираете сами).
 */

const ElementFactory = () => {
  const body = document.body;

  const newDiv = document.createElement("div");

  const id = "id" + Math.random();
  newDiv.id = `${id}`;

  body.append(newDiv);

  setText(id, "Some text");
};

ElementFactory();
ElementFactory();
ElementFactory();

/*
 * Task 3
 * функция принимает 2 параметра - кол-во и текст, создает столько элементов на странице и в каждый вписывает переданный текст.
 */

const createAmountOfElements = (amount, text) => {
  const body = document.body;

  for (let i = 0; i < amount; i++) {
    const newText = document.createElement("p");

    newText.textContent = text;

    body.append(newText);
  }
};

createAmountOfElements(3, "Task 3");

/*
 * Task 4
 * функция с 1м параметром - принимает класс и при вызове создает элемент с этим классом и добавляет его на страницу
 */

const createElementByClassName = (className) => {
  const body = document.body;

  const newText = document.createElement("p");

  newText.textContent = "New element"; // to see the element on the page

  newText.classList.add(className);

  body.append(newText);
};

createElementByClassName("newClass");

/*
 * Task 5
 * создать 3 вида тегов - выглядят как коты, собаки и мыши(разный фон и размеры). Написать фабрику, создающую указанный тип тега и добавляет на страницу.
 */

const createElement = (src) => {
  const animal = document.createElement("img");

  animal.setAttribute("src", src);
  animal.style.width = "20%";

  return animal;
};

const AnimalElementFactory = (animalType) => {
  let animal;

  switch (animalType) {
    case "cat":
      animal = createElement(
        "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403"
      );
      break;

    case "dog":
      animal = createElement(
        "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
      );
      break;

    case "mouse":
      animal = createElement(
        "https://www.woodlandtrust.org.uk/media/50820/house-mouse-wtml-1062551-amy-lewis.jpg"
      );
      break;

    default:
      break;
  }

  const body = document.body;
  body.append(animal);
};

AnimalElementFactory("cat");
AnimalElementFactory("dog");
AnimalElementFactory("mouse");

/*
 * Task 6
 * сделать так, чтобы картинка на фоне страницы менялась каждые 3 секунды (между 3мя любыми картинками)
 */

function getRandomIndx() {
  return Math.floor(Math.random() * 3);
}

const setBackgroundImage = () => {
  const body = document.body;

  const images = [
    "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403",
    "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
    "https://www.woodlandtrust.org.uk/media/50820/house-mouse-wtml-1062551-amy-lewis.jpg",
  ];

  setInterval(() => {
    body.style.backgroundImage = `url(${images[getRandomIndx()]})`;
  }, 3000);
};

setBackgroundImage();

/*
 * Task 7
 * выдать на страницу тег с цифрой 0, каждую секунду цифра должна увеличиваться на 1
 */

const incrTagText = () => {
  const body = document.body;

  const numberElement = document.createElement("p");
  numberElement.id = "number";

  body.append(numberElement);

  let counter = 0;

  setInterval(() => {
    const num = document.getElementById("number");
    num.textContent = counter;

    counter += 1;
  }, 1000);
};

incrTagText();

/*
 * Task 8
 * создать функцию принимающую тег и возвращающую функцию, при каждом ее вызове - этот тег увеличивается в размерах на 5 пикселей(и высота и ширина на 5 растет при каждом вызове от текущего размера)
 */

const incrTagSize = (tag) => {
  return () => {
    tag.style.width = `${+String(tag.style.width).split("px")[0] + 5}px`;
    tag.style.height = `${+String(tag.style.height).split("px")[0] + 5}px`;
  };
};

const num = document.getElementById("number");
num.style.height = "20px";
num.style.width = "20px";

incrTagSize(num)();
incrTagSize(num)();
incrTagSize(num)();
/*
 * Task 9
 * написать функцию, принимающую путь к картинке, ставит эту картинку как фон body и возвращает объект с 4мя методами - up,down, left, right.
 * При их вызове - фон в body смещается на 10 пикселей в выбранную сторону(при каждом вызове происходит сдвиг от текущего его положения).

    Пример:
    вызываем left(); -> фон в body сместился в лево на 10 пикселей
    вызываем left(); -> фон в body сместился в лево еще на 10 пикселей(то есть в целом уже на 20 от первоначального положения)
 */

/*
 * Task 10
 * напишите функцию которая принимает 1 параметр(число) и удаляет рандомные теги на странице каждую секунду(кол-во удаляемых задается паарметром функции)
 * (удалить может абсолютно любой тег, включая html)
 */
