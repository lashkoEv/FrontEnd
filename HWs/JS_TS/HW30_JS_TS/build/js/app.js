function getCorrectNumber(question) {
  let isCorrect = false;

  while (!isCorrect) {
    let answer = prompt(question);

    let isCorrectNumber = answer && !isNaN(+answer) && +answer > 0;

    if (isCorrectNumber) {
      return +answer;
    }
  }
}

class Hero {
  #damage;
  #hp;

  constructor(damage, hp) {
    this.#damage = damage;
    this.#hp = hp;
  }

  get hp() {
    return this.#hp;
  }

  set hp(hp) {
    this.#hp -= hp;
  }

  get damage() {
    return this.#damage;
  }
}

class Elf extends Hero {
  constructor(damage, hp) {
    super(damage, hp);
  }

  magicKick() {
    console.log("Magic Kick from Elf!");

    return this.damage * 2;
  }
}

class Archer extends Hero {
  constructor(damage, hp) {
    super(damage, hp);
  }

  magicKick() {
    console.log("Magic Kick from Archer!");

    return ((this.damage * 2) / 1.2) * 0.4 * 2.2;
  }
}

class Game {
  run() {
    const heroes = this.getCharacters();
    const isUserGoesFirst = this.getWhoGoesFirst();

    this.getStats(heroes);

    while (heroes.userHero.hp > 0 && heroes.computerHero.hp > 0) {
      if (isUserGoesFirst) {
        this.getKicks(heroes.userHero, heroes.computerHero);
      } else {
        this.getKicks(heroes.computerHero, heroes.userHero);
      }
    }

    if (heroes.userHero.hp >= 0) {
      console.log("Congratulations! You won!");
    } else {
      console.log("You lose!");
    }
  }

  getCharacters() {
    const type = getCorrectNumber("Choose a hero: 1 - Elf, else - Archer:");

    if (type === 1) {
      console.log("Your character is an Elf.");

      return {
        userHero: new Elf(this.getRandomDamage(), this.getRandomHP()),
        computerHero: new Archer(this.getRandomDamage(), this.getRandomHP()),
      };
    }

    console.log("Your character is an Archer.");

    return {
      userHero: new Archer(this.getRandomDamage(), this.getRandomHP()),
      computerHero: new Elf(this.getRandomDamage(), this.getRandomHP()),
    };
  }

  getRandomDamage() {
    return +Math.random().toString().slice(3, 4);
  }

  getRandomHP() {
    return +Math.random().toString().slice(3, 5);
  }

  getStats(heroes) {
    console.log("[PLAYER_HP]", heroes.userHero.hp);
    console.log("[PLAYER_DMG]", heroes.userHero.damage);

    console.log("[COMPUTER_HP]", heroes.computerHero.hp);
    console.log("[COMPUTER_DMG]", heroes.computerHero.damage);
  }

  getWhoGoesFirst() {
    if (+Math.random().toString().slice(3, 5) < 50) {
      console.log("You go first...");

      return true;
    }

    console.log("You go second...");

    return false;
  }

  getKicks(first, second) {
    second.hp = first.magicKick();
    first.hp = second.magicKick();

    console.log("[FIRST_HP]", first.hp);
    console.log("[SECOND_HP]", second.hp);
  }
}

function getGame() {
  let isRunning = true;

  while (isRunning) {
    const menuItem = getCorrectNumber("Hello!\n1. Let's play!\n2. Exit");

    switch (menuItem) {
      case 1:
        const game = new Game();
        game.run();
        break;

      case 2:
        isRunning = false;
        break;

      default:
        alert("Incorrect! Try again!");
    }
  }
}

getGame();
