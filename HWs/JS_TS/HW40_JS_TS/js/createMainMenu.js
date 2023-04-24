import { Game } from "./Game.js";

export const createMainMenu = () => {
  const firstTip = "TO CONTROL YOUR CHARACTER, USE THE UP AND DOWN ARROWS.";
  const secondTip =
    "IF THE CHARACTER COLLISIONS WITH THE METEOORITE - YOU LOSE, BE CAREFUL!";
  const thirdTip =
    "IF THE CHARACTER REACHES THE EDGE OF THE WINDOW, HE WILL TELEPORT TO THE OPPOSITE EDGE.";

  const menuWrapper = createElement("div", "menu-wrapper", "", null);

  const menu = createElement("div", "menu", "", menuWrapper);

  const title = createElement("h1", "title", "NIAN CAT GAME", menu);

  const button = createElement("button", "button", "LOAD GAME", menu);
  button.addEventListener("click", createCanvas);

  const controlTips = createElement("div", "control-tips", "", menu);

  const firstRow = createElement("p", "text", "CONTROL TIPS:", controlTips);

  const secondRow = createElement("p", "text", firstTip, controlTips);

  const thirdRow = createElement("p", "text", secondTip, controlTips);

  const fourthRow = createElement("p", "text", thirdTip, controlTips);

  return menuWrapper;
};

const createCanvas = () => {
  const app = document.getElementById("app");

  const canvas = document.createElement("canvas");
  canvas.id = "canvas";
  app.replaceChildren(canvas);

  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const scoreWrapper = createElement("div", "score-wrapper", "SCORE: ", app);
  const score = createElement("span", null, "0", scoreWrapper);
  score.id = "score";

  initLostModal();

  const game = new Game(ctx);
};

const createElement = (tag, className, textContent, parent) => {
  const element = document.createElement(tag);

  if (className) {
    element.classList.add(className);
  }

  if (textContent) {
    element.textContent = textContent;
  }

  if (parent) {
    parent.append(element);
  }

  return element;
};

const initLostModal = () => {
  const app = document.getElementById("app");

  const lostModal = createElement("div", "modal", "", app);
  lostModal.id = "lostModal";

  const lostContent = createElement("div", "modal__content", "", lostModal);
  lostContent.id = "lostContent";

  const lostTitle = createElement("div", "title", "YOU LOST!", lostContent);

  const backToMenu = createElement(
    "button",
    "button",
    "BACK TO MENU",
    lostContent
  );
  backToMenu.id = "backToMenu";
  backToMenu.addEventListener("click", () => {
    lostModal.style.display = "none";

    const app = document.getElementById("app");
    app.replaceChildren(createMainMenu());
  });
  lostContent.append(backToMenu);
};
