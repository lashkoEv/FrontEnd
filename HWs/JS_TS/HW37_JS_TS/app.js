// -2. Написать функцию с 2мя параметрами - начальное значение и длина, возвращает массив чисел шагом  1 от начального, указанной длины.
// Выполнить задание 2мя раными вариантами

const getNumberArray = (initValue, length) => {
  let result = [];

  for (let i = initValue; i < initValue + length; i++) {
    result.push(i);
  }

  return result;
};

console.log(getNumberArray(1000, 5));

const getNumberArrayV2 = (initValue, length) => {
  return Array(length)
    .fill(0)
    .map((_, i) => i + initValue);
};

console.log(getNumberArrayV2(1000, 5));

// -1. Всем элементам дать рамку и размеры, чтобы весь текст был виден и в элементах не было скрола. Все задания разделять линиями на странице, все задания долдны работать параллельно и не мешать друг другу.

// 0. Добавить на страницу textarea, input и кнопку. В texatarea заранее вбить любой текст.
// В инпуп вписываем любой текст.
// По клику на кнопку - проверка наличия текста из input в textarea.
// Если есть совпадение - рамка textarea станет lime, если нету - рамка оранжевая.

const createElement = (tag, value, text, id) => {
  const element = document.createElement(tag);

  if (value) {
    element.value = value;
  }

  if (text) {
    element.textContent = text;
  }

  if (id) {
    element.id = id;
  }

  return element;
};

const createTitle = (title) => {
  app.append(createElement("hr"));
  app.append(createElement("h3", null, title));
  app.append(createElement("hr"));
};

const task0 = () => {
  createTitle("Task 0");

  app.append(
    createElement(
      "textarea",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatibus.",
      null,
      "textareaTask0"
    )
  );
  app.append(createElement("input", "Lorem", null, "inputTask0"));
  app.append(createElement("button", null, "Task 0", "buttonTask0"));

  buttonTask0.addEventListener("click", () => {
    const regExp = new RegExp(inputTask0.value, "i");

    if (regExp.test(textareaTask0.value)) {
      textareaTask0.style.border = "2px solid lime";
    } else {
      textareaTask0.style.border = "2px solid orange";
    }
  });
};

task0();

// 2. На странице textarea и кнопка. Выбираете любой символ unicode и используете в разных местах и разном кол-ва в тексте textarea(чтобы шли иногда по несколько смайлоа подряд).
// По клику на кнопку - все смайлы дублируются (каждый заменяется на 2 смайла).

const task2 = () => {
  createTitle("Task 2");

  app.append(
    createElement(
      "textarea",
      "Lorem 🚀 ipsum 🚀🚀 dolor sit amet.🚀🚀🚀",
      null,
      "textareaTask2"
    )
  );
  app.append(createElement("button", null, "Task 2", "buttonTask2"));

  buttonTask2.addEventListener("click", () => {
    textareaTask2.value = textareaTask2.value.replace(/(\p{Emoji})/gu, "$1$1");
  });
};

task2();

// 3. Тоже textarea, кнопка и кнопка "+".
// По клику на кнопку "+" создаётся ещё один input. По двойному клику на input - он удаляется.
// В каждый input можно написать любое слово или число.
// По клику на кнопку - все совпадения из всех input заменяются в тексте textarea на текст из звёздочек - "*". Кол-во звёзд должно совпадать с кол-во символов в заменяемом слове/цифре.

const task3 = () => {
  createTitle("Task 3");

  app.append(
    createElement(
      "textarea",
      "Lorem ipsum dolor sit amet.",
      null,
      "textareaTask3"
    )
  );
  const inputs = createElement("div");
  app.append(inputs);
  const divElement = createElement("div");
  app.append(divElement);
  divElement.append(createElement("button", null, "Task 3", "buttonTask3"));
  divElement.append(createElement("button", null, "+", "plusTask3"));

  plusTask3.addEventListener("click", () => {
    const input = createElement("input", "Lorem");
    input.classList.add("task3");

    inputs.append(input);

    input.addEventListener("dblclick", () => {
      input.remove();
    });
  });

  buttonTask3.addEventListener("click", () => {
    const inputElements = document.getElementsByClassName("task3");

    for (let i = 0; i < inputElements.length; i++) {
      const regExp = new RegExp(inputElements[i].value);

      textareaTask3.value = textareaTask3.value.replace(
        regExp,
        "*".repeat(inputElements[i].value.length)
      );
    }
  });
};

task3();
