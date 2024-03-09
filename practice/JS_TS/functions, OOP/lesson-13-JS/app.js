class Hero {
  HP_BY_DEFAULT = 100;
  DAMAGE_BY_DEFAULT = 25;

  constructor(name, damage = this.DAMAGE_BY_DEFAULT, hp = this.HP_BY_DEFAULT) {
    this.name = name;
    this.damage = damage;
    this.hp = hp;
  }
}

class Elf extends Hero {
  constructor(name, damage, hp) {
    super(name, damage, hp);
  }

  magicKick() {
    return this.damage * 2;
  }
}

class Archer extends Hero {
  constructor(name, damage, hp) {
    super(name, damage, hp);
  }

  magicKick() {
    return ((this.damage * 2) / 1.2) * 0.4 * 2.2;
  }
}

let isRunning = true;

while (isRunning) {
  const userPick = prompt(`
        Hello , enter raice that you wanna pick : 
        a) Archer 
        b) Elf
        q) Qutit 
    `);

  const queue = random();

  switch (userPick.toLowerCase()) {
    case "a":
      const heroesArc = chooseHero(true);
      battle(heroesArc, queue);
      break;

    case "b":
      const heroesElf = chooseHero(false);
      battle(heroesElf, queue);
      break;

    case "q":
      isRunning = false;
      break;

    default:
      alert("Try once again!");
      break;
  }
}

function chooseHero(isArcher) {
  if (isArcher) {
    return {
      user: new Archer("Hero"),
      computer: new Elf("Hero Comp"),
    };
  }

  return {
    user: new Elf("Hero Comp"),
    computer: new Archer("Hero"),
  };
}

function battle(heroes, queue) {
  while (heroes.computer.hp > 0 && heroes.user.hp > 0) {
    if (queue === "hero") {
      getKick(heroes.user, heroes.computer);
    } else {
      getKick(heroes.computer, heroes.user);
    }
  }
}

function getKick(first, second) {
  first.hp -= second.magicKick();
  second.hp -= first.magicKick();

  console.log("[FIRST_HP]", first.hp);
  console.log("[SECOND_HP]", second.hp);
}

function random() {
  const value = Math.random().toString().slice(2, 3);

  if (value % 2) return "hero";

  return "bot";
}

// 1) Upgrade it
// 2) Make it clean
