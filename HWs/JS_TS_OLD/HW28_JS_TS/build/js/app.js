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
  constructor(damage, HP) {
    this.damage = damage;
    this.HP = HP;
  }

  getHP() {
    return this.HP;
  }

  setHP(HP) {
    this.HP -= HP;
  }

  getDMG() {
    return this.damage;
  }
}

class Elf extends Hero {
  constructor(damage, HP) {
    super(damage, HP);
  }

  magicKick() {
    console.log("Magic Kick from Elf!");

    return this.damage * 2;
  }
}

class Archer extends Hero {
  constructor(damage, HP) {
    super(damage, HP);
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

    while (heroes.userHero.getHP() > 0 && heroes.computerHero.getHP() > 0) {
      if (isUserGoesFirst) {
        this.getKicks(heroes.userHero, heroes.computerHero);
      } else {
        this.getKicks(heroes.computerHero, heroes.userHero);
      }
    }

    if (heroes.userHero.getHP() >= 0) {
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
        userHero: new Elf(this.getDamage(), this.getHP()),
        computerHero: new Archer(this.getDamage(), this.getHP()),
      };
    }

    console.log("Your character is an Archer.");

    return {
      userHero: new Archer(this.getDamage(), this.getHP()),
      computerHero: new Elf(this.getDamage(), this.getHP()),
    };
  }

  getDamage() {
    return +Math.random().toString().slice(3, 4);
  }

  getHP() {
    return +Math.random().toString().slice(3, 5);
  }

  getStats(heroes) {
    console.log("[PLAYER_HP]", heroes.userHero.getHP());
    console.log("[PLAYER_DMG]", heroes.userHero.getDMG());

    console.log("[COMPUTER_HP]", heroes.computerHero.getHP());
    console.log("[COMPUTER_DMG]", heroes.computerHero.getDMG());
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
    second.setHP(first.magicKick());
    first.setHP(second.magicKick());

    console.log("[FIRST_HP]", first.getHP());
    console.log("[SECOND_HP]", second.getHP());
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
