import { createMainMenu } from "./createMainMenu.js";

const app = () => {
  const app = document.getElementById("app");
  app.replaceChildren(createMainMenu());
};

app();
