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
    console.log("new hp:", this.HP);
  }
}

class Elf extends Hero {
  constructor(damage, HP) {
    super(damage, HP);
  }

  magicKick() {
    console.log("magicKick from elf");
    return this.damage * 2;
  }
}

class Archer extends Hero {
  constructor(damage, HP) {
    super(damage, HP);
  }

  magicKick() {
    console.log("magicKick from Archer");
    return ((this.damage * 2) / 1.2) * 0.4 * 2.2;
  }
}

class Game {
  getCharacters() {
    const type = getCorrectNumber("Choose a hero: 1 - Elf, else - Archer:");
    const damage = getCorrectNumber("Enter the damage:");
    const hp = getCorrectNumber("Enter HP:");

    if (type === 1) {
      return {
        userCharacter: new Elf(damage, hp),
        computerCharacter: new Archer(damage, hp),
      };
    }

    return {
      userCharacter: new Archer(damage, hp),
      computerCharacter: new Elf(damage, hp),
    };
  }

  getWhoGoesFirst() {
    if (+Math.random().toString().slice(3, 5) < 50) {
      return true;
    }

    return false;
  }

  run() {
    const characters = this.getCharacters();
    const isUserGoesFirst = this.getWhoGoesFirst();

    if (isUserGoesFirst) {
      while (
        characters.userCharacter.getHP() > 0 ||
        characters.computerCharacter.getHP() > 0
      ) {
        characters.computerCharacter.setHP(
          characters.userCharacter.magicKick()
        );

        characters.userCharacter.setHP(
          characters.computerCharacter.magicKick()
        );
      }
    } else {
      while (
        characters.userCharacter.getHP() > 0 ||
        characters.computerCharacter.getHP() > 0
      ) {
        characters.userCharacter.setHP(
          characters.computerCharacter.magicKick()
        );
        characters.computerCharacter.setHP(
          characters.userCharacter.magicKick()
        );
      }
    }

    if (
      characters.userCharacter.getHP() <= characters.computerCharacter.getHP()
    ) {
      console.log("You win!");
    } else {
      console.log("You loose!");
    }
  }
}

const game = new Game();
game.run();
