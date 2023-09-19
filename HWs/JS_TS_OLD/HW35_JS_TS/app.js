let currentIndex = 0;
let word = "apple";

const createElement = (tag, id) => {
  const element = document.createElement(tag);

  element.id = id;

  return element;
};

const styleTheBody = (body) => {
  body.style.height = "100vh";

  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";
  body.style.flexDirection = "column";
};

const createSpan = (id, text) => {
  const span = createElement("span", id);

  span.textContent = text;

  return span;
};

const createBox = (id) => {
  const box = createElement("div", id);

  box.style.margin = "10px";
  box.style.padding = "10px 30px";
  box.style.border = "1px solid black";

  return box;
};

const addTabListener = () => {
  document.addEventListener("keydown", (event) => {
    if (event.code === "Tab") {
      event.preventDefault();

      if (document.activeElement === input) {
        input.blur();
      } else {
        input.focus();
      }
    }
  });
};

const addInputListener = () => {
  input.addEventListener("input", () => {
    const inputArray = input.value.toLowerCase().split("");

    const isCorrectLetter =
      inputArray[inputArray.length - 1] ===
      word.toLowerCase().split("")[currentIndex];

    if (isCorrectLetter) {
      setCorrect();
    } else {
      setIncorrect();
    }
  });
};

const setCorrect = () => {
  word = word.replace(word[currentIndex], word[currentIndex].toUpperCase());
  wordSpan.textContent = word;

  currentIndex++;

  if (currentIndex === word.length) {
    input.remove();
  }
};

const setIncorrect = () => {
  countBox.textContent = +countBox.textContent + 1;

  input.value = input.value.slice(0, input.value.length - 1);
};

const app = () => {
  const body = document.body;
  styleTheBody(body);

  const wordBox = createBox("wordBox");
  const wordSpan = createSpan("wordSpan", word);
  wordBox.append(wordSpan);
  body.append(wordBox);

  const input = createElement("input", "input");
  body.append(input);

  const countBox = createBox("countBox");
  const countSpan = createSpan("countSpan", "0");
  countBox.append(countSpan);
  body.append(countBox);

  addTabListener();
  addInputListener();
};

app();
