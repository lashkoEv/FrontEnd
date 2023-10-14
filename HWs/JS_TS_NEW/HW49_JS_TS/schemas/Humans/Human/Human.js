import { isExisting } from "../../../utils";

// SRP (single reason for change)
// OCP (private, getters/setters)
export class Human {
  #name;
  #surname;
  #age;
  #gender;
  #salary;
  #balance;
  #rel;
  #imgSrc;

  constructor({ name, surname, age = 0, gender, salary, balance, rel, imgSrc }) {
    isExisting(name) && (this.#name = name);
    isExisting(surname) && (this.#surname = surname);
    isExisting(age) && (this.#age = age);
    isExisting(gender) && (this.#gender = gender);
    isExisting(salary) && (this.#salary = salary);
    isExisting(balance) && (this.#balance = balance);
    isExisting(rel) && (this.#rel = rel);
    isExisting(imgSrc) && (this.#imgSrc = imgSrc);
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get surname() {
    return this.#surname;
  }

  set surname(surname) {
    this.#surname = surname;
  }

  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }

  get gender() {
    return this.#gender;
  }

  set gender(gender) {
    this.#gender = gender;
  }

  get salary() {
    return this.#salary;
  }

  set salary(salary) {
    this.#salary = salary;
  }

  get balance() {
    return this.#balance;
  }

  set balance(balance) {
    this.#balance = balance;
  }

  get rel() {
    return this.#rel;
  }

  set rel(rel) {
    this.#rel = rel;
  }

  get imgSrc() {
    return this.#imgSrc;
  }

  set imgSrc(imgSrc) {
    this.#imgSrc = imgSrc;
  }
}
