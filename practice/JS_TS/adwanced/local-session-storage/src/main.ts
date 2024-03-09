import "./style.css";

const input = document.getElementById("input") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;
const items = document.getElementById("items");

const addItem = (value: string) => {
  sessionStorage.setItem(value, value);

  const item = document.createElement("div");
  item.className = "item";

  const text = document.createElement("span");
  text.textContent = value;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
    item.remove();
    sessionStorage.removeItem(value);
  });

  item.append(text, deleteButton);

  items?.append(item);
};

button?.addEventListener("click", () => {
  addItem(input?.value);
});
