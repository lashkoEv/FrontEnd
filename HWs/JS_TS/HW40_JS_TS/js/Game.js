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

  constructor(ctx) {
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
  }

  stopGame = () => {
    clearInterval(this.#gameIntervalId);
    clearInterval(this.#addMeteoritesIntervalId);
    clearInterval(this.#checkMeteoritesIntervalId);
    this.#stopAudio();
    this.#ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.#ctx.drawImage(this.#bg, 0, 0);
  };

  #playAudio = () => {
    this.#audio.src = "./public/sounds/main-theme/main-theme-1.mp3";
    this.#audio.volume = 0.2;
    this.#audio.loop = true;
    document.onclick = () => {
      this.#audio.play();
    };
  };

  #stopAudio = () => {
    this.#audio.stop();
  };

  addMeteorites = () => {
    return setInterval(() => {
      const meteorite = new Meteorite(this.#ctx);
      this.#meteorites.push(meteorite);
    }, 2000);
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
          alert("Lost");
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
}
