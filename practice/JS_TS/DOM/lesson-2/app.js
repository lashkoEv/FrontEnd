/*
 * Task 1
 * выдать 2 бокса по центру экрана, по нажатию любой клавиши - показывать в одном боксе ее код, а во втором ее значение
 */

const createBox = (id) => {
  const box = document.createElement("div");

  box.id = id;

  box.style.width = "200px";
  box.style.height = "200px";

  box.style.margin = "10px";

  box.style.border = "5px solid black";

  box.style.display = "flex";
  box.style.alignItems = "center";
  box.style.justifyContent = "center";

  box.style.fontSize = "40px";
  box.style.fontFamily = "sans-serif";

  return box;
};

const styleTheBody = (body) => {
  body.style.height = "100vh";

  body.style.display = "flex";
  body.style.alignItems = "center";
  body.style.justifyContent = "center";
};

const addListener = () => {
  document.addEventListener("keydown", (event) => {
    const keyBox = document.getElementById("key");
    const codeBox = document.getElementById("code");

    keyBox.textContent = event.key;
    codeBox.textContent = event.code;
  });
};

const task1 = () => {
  const body = document.body;
  styleTheBody(body);

  const keyBox = createBox("key");
  const codeBox = createBox("code");

  body.append(keyBox);
  body.append(codeBox);

  addListener();
};

// task1();

/*
 * Task 2
 * выдать инпут на страницу, по любому вводу в нем в живом времени сбоку показывать его значение(текущее полное значение инпута)
 */

const createElement = (element, id) => {
  const input = document.createElement(element);

  input.id = id;
  input.style.margin = "10px";

  return input;
};

const addListenerToInput = () => {
  input.addEventListener("keydown", () => {
    const input = document.getElementById("input");
    const inputText = document.getElementById("inputText");

    inputText.textContent = input.value;
  });
};

const task2 = () => {
  const input = createElement("input", "input");
  const inputText = createElement("span", "inputText");

  const body = document.body;

  body.append(input);
  body.append(inputText);

  addListenerToInput();
};

// task2();

/*
 * Task 3
 * запретить вызов панели разработчика через f12 и ctrl+shift+i (не дать ее открыть)
 */

const task3 = () => {
  document.addEventListener("keydown", (event) => {
    const isCallDeveloperPanel =
      event.code === "F12" ||
      (event.ctrlKey && event.shiftKey && event.code === "KeyI");

    if (isCallDeveloperPanel) {
      event.preventDefault();
    }

    console.log(event.key, event.code);
  });
};

// task3();

/*
 * Task 4
 * добавьте картинку персонажа и чтобы ним можно было двигаться по странице через w,a,s,d
 */

const createImgElement = () => {
  const character = createElement("img", "character");

  character.setAttribute(
    "src",
    "https://www.freeiconspng.com/thumbs/green-png/luma-green-icon-super-mario-18.png"
  );

  character.style.position = "relative";
  character.style.top = "100px";
  character.style.left = "100px";

  return character;
};

const moveY = (character, number) => {
  character.style.top = `${
    +String(character.style.top).split("px")[0] + number
  }px`;
};

const moveX = (character, number) => {
  character.style.left = `${
    +String(character.style.left).split("px")[0] + number
  }px`;
};

const addListenerToImg = () => {
  document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "KeyW":
        moveY(character, -5);
        break;

      case "KeyS":
        moveY(character, 5);
        break;

      case "KeyA":
        moveX(character, -5);
        break;

      case "KeyD":
        moveX(character, 5);
        break;

      default:
        break;
    }
  });
};

const task4 = () => {
  const character = createImgElement();

  const body = document.body;

  body.append(character);

  addListenerToImg();
};

// task4();

/*
 * Task 5
 * выдать на страницу выпадающий список с 3мя странами(любыми) и рядом бокс, по выбору страны - в боксе появится ее флаг
 */

const createSelect = () => {
  const select = createElement("select", "select");

  const ukraine = createElement("option", "UA");
  ukraine.textContent = "Ukraine";
  ukraine.value = "UA";
  select.append(ukraine);

  const poland = createElement("option", "PL");
  poland.textContent = "Poland";
  poland.value = "PL";
  select.append(poland);

  const UK = createElement("option", "UK");
  UK.textContent = "United Kingdom";
  UK.value = "UK";
  select.append(UK);

  return select;
};

const createFlag = () => {
  const flag = createElement("img", "flagImg");

  flag.style.width = "100px";
  flag.style.height = "100px";
  flag.style.boxShadow = "0px 5px 10px 0px rgba(0, 0, 0, 0.3)";

  return flag;
};

const addListenerToSelect = () => {
  select.addEventListener("change", () => {
    const select = document.getElementById("select");

    switch (select.value) {
      case "UA":
        flagImg.setAttribute(
          "src",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png?20100406171642"
        );
        break;

      case "PL":
        flagImg.setAttribute(
          "src",
          "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png"
        );
        break;

      case "UK":
        flagImg.setAttribute(
          "src",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
        );
        break;

      default:
        break;
    }
  });
};

const task5 = () => {
  const select = createSelect();

  const box = createBox("flag");
  const flag = createFlag();
  box.append(flag);

  const body = document.body;

  body.append(select);
  body.append(box);

  addListenerToSelect();
};

task5();

/*
 * Task 6
 * выдать:
 - выпадающий список из 5ти пунктов
 - поле ввода кол-ва
 - поле ввода цены(заблокировано для редактирования, автозаполняется)
 - поле ввода скидки(заблокировано для редактирования, автозаполняется, сбоку стоит знак '%')
 - поле ввода итоговой стоимости(заблокировано для редактирования, автозаполняется)
 - кнопка 'посчитать'

В выпадающем списке могут быть любые вида топара - пончики, кактусы(именования в пунктах идут тестом), по выбору товара:
  - сбоку от списка изменится юникод символ этого товара(для кактуса - сбоку появится кактус, для пончика - пончик и т.д.).
  - в поле цены автоматически впишется цена выбранного товара

При вволе в поле кол-ва - поле скидки автозаполнится:
  - если ввели число меньше 100 - скидка 0%
  - если ввели число от 100 до 500(не включительно) - скидка 2%
  - если ввели число от 500 - скидка 7%

По клику на кнопку 'посчитать' - поле ввода итоговой стоимости автозаполнится по формуле:
 кол-во * цена - скидка(в %) от полученой суммы

 
 */
