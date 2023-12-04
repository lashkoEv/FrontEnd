import "./style.css";

const game = document.createElement("div");
game.className = "game";

const fields = [];

for (let i = 0; i < 8; i++) {
  const f = [];
  for (let j = 0; j < 8; j++) {
    const field = document.createElement("div");
    field.className = "field";
    f.push(field);
    game.append(field);
  }
  fields.push(f);
}

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        fields[i][j].classList.add("white");
      } else {
        fields[i][j].classList.add("darkmagenta");
      }
    } else {
      if (j % 2 !== 0) {
        fields[i][j].classList.add("white");
      } else {
        fields[i][j].classList.add("darkmagenta");
      }
    }
  }
}

app.append(game);
