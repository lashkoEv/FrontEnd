// 1) All of class below shoud have next props :
// -name ,
// -attack :  (range 1 - 100) ,
// -mana : (range 1 - 100),
// -intelligents : range (1-100)

// method :
// attack()
// firstSkill()
// secondSkill()
// ulimateAttack()

// class Warrior
// firstSkill() -> kick
// ?

// class Alchemist
// firstSkill() -> throw flask
// ?

// class Elf
// firstSkill() -> throw knife
// ?
// ulimateAttack()

// class Paladin
// firstSkill() -> heal
// ?
// ulimateAttack()

class Character {
  #name;
  #attack;
  #mana;
  #intelligent;

  constructor(name) {
    this.#name = name;
    this.#attack = Math.random().slice(3, 5);
    this.#mana = Math.random().slice(3, 5);
    this.#intelligent = Math.random().slice(3, 5);
  }

  get name() {
    return this.#name;
  }

  get attack() {
    return this.#attack;
  }

  get mana() {
    return this.#mana;
  }

  get intelligent() {
    return this.#intelligent;
  }

  set name(name) {
    this.#name = name;
  }

  set attack(attack) {
    this.#attack = attack;
  }

  set mana(mana) {
    this.#mana = mana;
  }

  set intelligent(intelligent) {
    this.#intelligent = intelligent;
  }

  firstSkill() {
    console.log("default skill");
  }
}

class Warrior extends Character {
  constructor(name) {
    super(name);
  }

  firstSkill() {
    console.log("Kick!");
  }
}

class Alchemist extends Character {
  constructor(name) {
    super(name);
  }

  firstSkill() {
    console.log("Throw flask!");
  }
}

class Elf extends Character {
  constructor(name) {
    super(name);
  }

  firstSkill() {
    console.log("Throw knife!");
  }

  ultimateAttack() {
    console.log("Booooom!");
  }
}

class Paladin extends Character {
  constructor(name) {
    super(name);
  }

  firstSkill() {
    console.log("Heal!");
  }

  ultimateAttack() {
    console.log("Mega boooom!");
  }
}

class CharacterDB {
  #characters;

  constructor() {
    this.#characters = [
      new Paladin("John"),
      new Elf("Mike"),
      new Alchemist("Jack"),
      new Warrior("Joe"),
    ];
  }

  showUltimateAttack() {
    for(Character of this.#characters) {
        if(ultimateAttack()) {
            ultimateAttack();
        }
    }
  }
}
