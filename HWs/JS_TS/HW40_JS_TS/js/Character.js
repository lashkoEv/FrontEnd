export class Character {
  #ctx;

  #image;

  #width;
  #height;

  #positionX;
  #positionY;

  #isMoveUp;
  #animationId;

  constructor(ctx) {
    this.#ctx = ctx;

    this.#width = 200;
    this.#height = 85;

    this.#positionX = 0;
    this.#positionY = canvas.height / 2 - 40;

    this.#image = new Image();
    this.#image.src = "./public/images/character/character.png";
    this.#image.onload = () => {
      ctx.drawImage(
        this.#image,
        this.#positionX,
        this.#positionY,
        this.#width,
        this.#height
      );
    };

    this.#isMoveUp = false;
    this.#animationId = 0;

    this.#setMovement();
  }

  draw = () => {
    this.#ctx.drawImage(
      this.#image,
      this.#positionX,
      this.#positionY,
      this.#width,
      this.#height
    );
  };

  #move = () => {
    if (this.#isMoveUp) {
      this.#positionY += 3;
    } else {
      this.#positionY -= 3;
    }

    this.#animationId = requestAnimationFrame(this.#move);
  };

  #onKeyDown = ({ code }) => {
    if (code === "ArrowDown") {
      this.#isMoveUp = true;
      this.#animationId = requestAnimationFrame(this.#move);
    }

    if (code === "ArrowUp") {
      this.#isMoveUp = false;
      this.#animationId = requestAnimationFrame(this.#move);
    }
  };

  #onKeyUp = ({ code }) => {
    if (code === "ArrowDown") {
      cancelAnimationFrame(this.#animationId);
      document.addEventListener("keydown", this.#onKeyDown, { once: true });
    }

    if (code === "ArrowUp") {
      cancelAnimationFrame(this.#animationId);
      document.addEventListener("keydown", this.#onKeyDown, { once: true });
    }
  };

  #setMovement() {
    document.addEventListener("keydown", this.#onKeyDown, { once: true });
    document.addEventListener("keyup", this.#onKeyUp);
  }

  get positionX() {
    return this.#positionX;
  }

  get positionY() {
    return this.#positionY;
  }
}
