"use strict";

// ---- div

const random = (min, max) => 
  Math.floor(Math.random() * (max - min) + min);

const renderDiv = () => {
  const x = random(0, window.innerWidth - 100);
  const y = random(0, window.innerHeight - 100);

  const div = document.createElement("div");
  div.classList.add("sq");
  div.style.left = x + "px";
  div.style.top = y + "px";
  document.body.append(div);
};
const renderDivs = (n) => {
  for (let i = 0; i < n; i += 1) {
    renderDiv();
  }
}

// renderDivs(3_000);


// ---- canvas

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext("2d");

const squaresCll = [];

const renderSquare = () => {
  const x = random(0, window.innerWidth - 100);
  const y = random(0, window.innerHeight - 100);

  squaresCll.push({ originalX: x, x, y });
};
const moveRight = (sq) => {
  sq.x += 1;
};
const moveLeft = (sq) => {
  sq.x -= 1;
};
let move;
const moveSquare = () => {
  requestAnimationFrame(moveSquare);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  squaresCll.forEach((sq) => {
    if (sq.x === sq.originalX + 100) {
      move = moveLeft;
    } else if (sq.x === sq.originalX) {
      move = moveRight;
    }

    move(sq);
    
    ctx.fillRect(sq.x, sq.y, 10, 10);
  });

};

const renderSquares = (n) => {
  for (let i = 0; i < n; i += 1) {
    renderSquare();
  }
  moveSquare();
}

renderSquares(10_000);
