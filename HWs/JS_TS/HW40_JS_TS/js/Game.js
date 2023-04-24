import { Character } from "./Character.js";
import { Meteorite } from "./Meteorite.js";

export class Game {
  #ctx;

  #bg;

  #character;

  #gameIntervalId;

  #meteorites;
  #addMeteoritesIntervalId;
  #checkMeteoritesIntervalId;

  #intersectionIntervalId;

  #audio;

  #speed;

  constructor(ctx) {
    this.#speed = 3;

    this.#ctx = ctx;

    this.#bg = new Image();
    this.#bg.src = "./public/images/bg/bg3.jpg";
    this.#bg.onload = () => {
      this.#ctx.drawImage(this.#bg, 0, 0);
    };

    this.#character = new Character(this.#ctx);

    this.#meteorites = [];

    this.#gameIntervalId = setInterval(this.#draw, 1);

    this.#addMeteoritesIntervalId = this.addMeteorites();
    this.#checkMeteoritesIntervalId = this.checkMeteorites();

    this.#intersectionIntervalId = this.checkIntersection();

    this.#audio = new Audio();
    this.#playAudio();

    this.increaseSpeed();
  }

  increaseSpeed = () => {
    return setInterval(() => {
      this.#speed += 1;
    }, 5000);
  };

  stopGame = () => {
    clearInterval(this.#gameIntervalId);
    clearInterval(this.#addMeteoritesIntervalId);
    clearInterval(this.#checkMeteoritesIntervalId);
    clearInterval(this.#intersectionIntervalId);
    this.#stopAudio();
    this.#ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.#ctx.drawImage(this.#bg, 0, 0);
  };

  #playAudio = () => {
    this.#audio.src = "./public/sounds/main-theme/main-theme-1.mp3";
    this.#audio.volume = 0.2;
    this.#audio.loop = true;
    this.#audio.play();
  };

  #stopAudio = () => {
    this.#audio.pause();
  };

  addMeteorites = () => {
    return setInterval(() => {
      const meteorite = new Meteorite(this.#ctx, this.#speed);
      this.#meteorites.push(meteorite);
    }, 1000);
  };

  checkMeteorites = () => {
    return setInterval(() => {
      this.#meteorites = this.#meteorites.filter((meteorite) => {
        if (!meteorite.isFlew) {
          return meteorite;
        }
      });
    }, 1);
  };

  checkIntersection = () => {
    return setInterval(() => {
      this.#meteorites.forEach((meteorite) => {
        const isIntersection =
          (this.#character.positionY >= meteorite.positionY &&
            this.#character.positionY <= meteorite.positionY + 80 &&
            this.#character.positionX + 150 >= meteorite.positionX) ||
          (this.#character.positionY + 80 >= meteorite.positionY &&
            this.#character.positionY + 80 <= meteorite.positionY + 80 &&
            this.#character.positionX + 150 >= meteorite.positionX);

        if (isIntersection) {
          this.stopGame();
          this.#lost();
        }
      });
    }, 1);
  };

  #draw = () => {
    this.#ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.#ctx.drawImage(this.#bg, 0, 0);
    this.#character.draw();

    this.#meteorites.forEach((meteorite) => {
      meteorite.draw();
    });
  };

  #lost() {
    lostModal.style.display = "block";
    const audio = new Audio();
    audio.src = "./public/sounds/lost/lost.mp3";
    audio.volume = 0.4;
    audio.play();
  }
}
