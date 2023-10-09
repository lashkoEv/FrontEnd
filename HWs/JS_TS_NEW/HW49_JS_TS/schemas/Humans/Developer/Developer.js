import { Human } from "../..";

export class Developer extends Human {
  constructor({ name, surname, age, gender, salary = 499, balance, rel }) {
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
