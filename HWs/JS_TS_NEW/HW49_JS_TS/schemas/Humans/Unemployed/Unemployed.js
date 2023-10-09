import { Human } from "../..";

export class Unemployed extends Human {
  constructor({ name, surname, age, gender, salary = 100, balance, rel }) {
    super({
      name,
      surname,
      age,
      gender,
      salary,
      balance,
      rel,
    });
  }
}
