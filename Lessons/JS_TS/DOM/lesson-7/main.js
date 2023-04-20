"use strict";

canvas.height = 500;
canvas.width = 500;
const ctx = canvas.getContext('2d');

let x = 0;
let y = 0;
let h = 100;
let w = 100;
let step = 10;

ctx.fillRect(x, y, w, h);

const laggyMove = () => {
  const moveDown = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    y += step;
    ctx.fillRect(x, y, w, h);
  };

  const onKeyDown = ({ code }) => {
    if (code === 'KeyS') {
      moveDown();
    }
  };

  window.addEventListener('keydown', onKeyDown);
};




const smoothMove = () => {
  let callbackId;

  const moveDown = () => {
    callbackId = requestAnimationFrame(moveDown);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    y += step;
    ctx.fillRect(x, y, w, h);
  };

  const onKeyDown = ({ code }) => {
    if (code === 'KeyS') {
      callbackId = requestAnimationFrame(moveDown);
    }
  };

  const onKeyUp = ({ code }) => {
    if (code === 'KeyS') {
     cancelAnimationFrame(callbackId);
      window.addEventListener('keydown', onKeyDown, { once: true });
    }
  }

  window.addEventListener('keydown', onKeyDown, { once: true });
  window.addEventListener('keyup', onKeyUp);
};

// laggyMove();
smoothMove()
