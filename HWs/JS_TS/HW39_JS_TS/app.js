const app = () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const ctx = canvas.getContext("2d");

  let previousX = null;
  let previousY = null;
  let draw = false;

  ctx.lineWidth = size.value;
  ctx.lineCap = "round";

  color.addEventListener("change", () => {
    ctx.fillStyle = color.value;
    ctx.strokeStyle = color.value;
  });

  size.addEventListener("change", () => {
    ctx.lineWidth = size.value;
  });

  clear.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  document.addEventListener("mousedown", () => {
    draw = true;
  });

  document.addEventListener("mouseup", () => {
    draw = false;
  });

  document.addEventListener("mousemove", (event) => {
    if ((previousX === null && previousY === null) || !draw) {
      previousX = event.pageX;
      previousY = event.pageY;
      return;
    }

    const currentX = event.pageX;
    const currentY = event.pageY;

    ctx.beginPath();
    ctx.moveTo(previousX, previousY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
    ctx.closePath();

    previousX = currentX;
    previousY = currentY;
  });
};

app();
