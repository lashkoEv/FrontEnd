let actions = [];
let count = 1;

const createAction = (classes, actionName) => {
  const actionElement = document.createElement("div");

  classes.forEach((item) => {
    actionElement.classList.add(item);
  });

  const actionNameElement = document.createElement("div");
  actionNameElement.classList.add("name");
  actionElement.append(actionNameElement);

  if (actionName) {
    actionNameElement.textContent = actionName;
  }

  return actionElement;
};

const initListeners = () => {
  addCallback.addEventListener("click", () => {
    let name = `Callback${count}`;
    count++;

    if (callbackName.value.trim().length !== 0) {
      name = callbackName.value.trim();
    }

    let time = 1000;

    if (callbackTime.value > 1000) {
      time = +callbackTime.value;
    }

    const element = createAction(["action", "event-action"], name);
    eventQueue.append(element);

    element.animate(
      [{ transform: "translateX(40px)" }, { transform: "translateX(0px)" }],
      300
    );

    actions.push({ name, time });
    console.log(callStack.children.length);
    console.log(eventQueue.children.length);
  });
};

const checkCallStack = () => {
  setInterval(() => {
    if (callStack.children.length === 0 && actions.length > 0) {
      const element = actions.shift();

      const htmlElement = createAction(["action"], element.name);
      callStack.append(htmlElement);

      htmlElement.animate(
        [{ transform: "translateY(-40px)" }, { transform: "translateY(0px)" }],
        300
      );

      eventQueue.children[0].animate(
        [{ transform: "translateX(0px)" }, { transform: "translateX(-40px)" }],
        300
      );

      setTimeout(() => {
        eventQueue.removeChild(eventQueue.children[0]);
      }, 200);

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
      }, element.time);
    }
  }, 1000);
};

const app = () => {
  initListeners();
  checkCallStack();
};

app();

