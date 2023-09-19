const createElement = () => {
  const box = document.createElement("div");

  box.id = "box";

  box.textContent = "0";

  box.style.width = "200px";
  box.style.height = "200px";

  box.style.border = "5px solid black";

  box.style.display = "flex";
  box.style.alignItems = "center";
  box.style.justifyContent = "center";

  box.style.fontSize = "40px";
  box.style.fontFamily = "sans-serif";

  box.addEventListener("click", changeBox);

  return box;
};

const changeBox = () => {
  const box = document.getElementById("box");

  box.textContent = `${+box.textContent + 1}`;

  if (box.style.borderColor === "black") {
    box.style.borderColor = "darkmagenta";
  } else {
    box.style.borderColor = "black";
  }
};

const app = () => {
  const box = createElement();

  const body = document.body;

  body.append(box);
};

app();
