let callbacks = [];
let count = 1;

const createElement = (tag, classes, src, textContent) => {
  const element = document.createElement(tag);

  classes.forEach((item) => {
    element.classList.add(item);
  });

  if (textContent) {
    element.textContent = textContent;
  }

  if (src) {
    element.src = src;
  }

  return element;
};

const createCallbackElement = (classes, name, withImg) => {
  const callbackElement = createElement("div", classes, null, null);

  const callbackNameElement = createElement("div", ["name"], null, name);

  callbackElement.append(callbackNameElement);

  if (withImg) {
    const img = createElement(
      "img",
      ["img"],
      "./public/img/processing2.gif",
      null
    );

    callbackElement.append(img);
  }

  return callbackElement;
};

const getName = () => {
  let name = `Callback${count++}`;

  if (callbackName.value.trim().length !== 0) {
    name = callbackName.value.trim();
  }

  return name;
};

const getTime = () => {
  let time = 1000;

  if (callbackTime.value > 1000) {
    time = +callbackTime.value;
  }

  return time;
};

const getCallback = () => {
  const callback = {
    name: getName(),
    time: getTime(),
  };

  callbacks.push(callback);

  return callback;
};

const initAddCallbackListener = () => {
  addCallback.addEventListener("click", () => {
    const { name } = getCallback();

    const element = createCallbackElement(["callback", "event-callback"], name);
    eventQueue.append(element);

    element.animate(
      [{ transform: "translateX(40px)" }, { transform: "translateX(0px)" }],
      300
    );
  });
};

const addCallbackToCallStack = (name) => {
  const htmlElement = createCallbackElement(["callback"], name, true);
  callStack.append(htmlElement);

  htmlElement.animate(
    [{ transform: "translateY(-40px)" }, { transform: "translateY(0px)" }],
    300
  );

  return htmlElement;
};

const removeCallbackFromEventQueue = () => {
  eventQueue.children[0].animate(
    [{ transform: "translateX(0px)" }, { transform: "translateX(-40px)" }],
    300
  );

  setTimeout(() => {
    eventQueue.removeChild(eventQueue.children[0]);
  }, 200);
};

const removeCallbackFromCallStack = (time, htmlElement) => {
  setTimeout(() => {
    htmlElement.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(-40px)" },
        { opacity: 0 },
      ],
      300
    );

    setTimeout(() => {
      callStack.removeChild(callStack.children[0]);
    }, 200);
  }, time);
};

const checkCallStack = () => {
  setInterval(() => {
    if (callStack.children.length === 0 && callbacks.length > 0) {
      const element = callbacks.shift();

      removeCallbackFromEventQueue();

      const htmlElement = addCallbackToCallStack(element.name);

      removeCallbackFromCallStack(element.time, htmlElement);
    }
  }, 1000);
};

const app = () => {
  initAddCallbackListener();
  checkCallStack();
};

app();
