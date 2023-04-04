// + выдайтена страницу любое слово на английском, ниже поле для ввода, еще ниже блок с цифрой 0.

// + по нажатию на 'tab' должена переключаться фокусировка на поле ввода (по принципу toggle для классов).
// + ('tab' должен работать только с полем, игнорируя все остальное)

// каждый раз как человек вводит в поле правильную букву из слова - она выделяется(на странице) и дальше игнорируется
// (выделяйте любым способом). Когда человек введет все слово - поле ввода удаляется со страницы.
// Ввод должен работать только подряд: если вы выбрали, скажем, слово 'apple', человеку не засчитает
// ни одну букву кроме 'a', затем только 'p' и так далее.

// Блок с цифрой, где изначально 0 увеличивается каждый раз на 1 за каждый неверный ввод с клавиатуры.

let currentIndex = 0;
let string = "cat";

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

const addInputListener = (input) => {
  input.addEventListener("input", () => {
    const inputArray = input.value.toLowerCase().split("");
    
    if (inputArray[inputArray.length - 1] === ["c", "a", "t"][currentIndex]) {
      setCorrect();
    } else {
      setIncorrect();
    }
  });
};

const setCorrect = () => {
  switch (currentIndex) {
    case 0:
        C.style.color = "red";
      break;
    case 1:
        A.style.color = "red";
      break;
    case 2:
        T.style.color = "red";
        deleteInput();
      break;

    default:
      break;
  }

  currentIndex++;
};

const deleteInput = () => {
    input.remove();
}

const setIncorrect = () => {
  const count = document.getElementById("count");

  count.textContent = +count.textContent + 1;

  input.value = input.value.slice(0, input.value.length - 1);
};

const app = () => {
  const body = document.body;
  styleTheBody(body);

  const spanBox = createBox("spanBox");
  const spanC = createSpan("C", "C");
  const spanA = createSpan("A", "A");
  const spanT = createSpan("T", "T");
  spanBox.append(spanC);
  spanBox.append(spanA);
  spanBox.append(spanT);
  body.append(spanBox);

  const input = createElement("input", "input");
  body.append(input);

  const countBox = createBox("countBox");
  const count = createSpan("count", "0");
  countBox.append(count);
  body.append(countBox);

  addTabListener();
  addInputListener(input);
};

app();
