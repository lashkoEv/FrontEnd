export class Meteorite {
  #ctx;

  #image;

  #width;
  #height;

  #positionX;
  #positionY;

  #animationId;

  #isFlew;

  constructor(ctx) {
    this.#ctx = ctx;

    this.#width = 200;
    this.#height = 85;

    this.#positionX = canvas.width + 200;
    this.#positionY = Math.floor(Math.random() * (canvas.height - 100) + 100);

    this.#image = new Image();
    this.#image.src = "./public/images/meteorite/meteorite.png";
    this.#image.onload = () => {
      ctx.drawImage(
        this.#image,
        this.#positionX,
        this.#positionY,
        this.#width,
        this.#height
      );
    };

    this.#animationId = 0;

    this.#move();

    this.#isFlew = false;
  }

  #move = () => {
    this.#positionX -= 3;
    this.#checkPosition();
    this.#animationId = requestAnimationFrame(this.#move);
  };

  #checkPosition = () => {
    if (this.#positionX <= 0) {
      this.#isFlew = true;
    }
  };

  draw = () => {
    this.#ctx.drawImage(
      this.#image,
      this.#positionX,
      this.#positionY,
      this.#width,
      this.#height
    );
  };

  get isFlew() {
    return this.#isFlew;
  }

  get positionX() {
    return this.#positionX;
  }

  get positionY() {
    return this.#positionY;
  }
}
