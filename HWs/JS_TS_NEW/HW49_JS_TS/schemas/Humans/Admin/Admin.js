import { Human } from "../..";

export class Admin extends Human {
  constructor({ name, surname, age, gender, salary = 399, balance, rel }) {
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
