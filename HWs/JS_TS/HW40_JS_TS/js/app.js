import { createMainMenu } from "./createMainMenu.js";

// Доп. (не обязательно)
// - стрельба персонажа
// - счетчик очей
// - тепорт с края полотна на противополоный край

const app = () => {
  const app = document.getElementById("app");
  app.replaceChildren(createMainMenu());
};

app();
