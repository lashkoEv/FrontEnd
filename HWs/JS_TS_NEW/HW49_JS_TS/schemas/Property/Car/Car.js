import { isExisting } from "../../../utils";

export class Car {
  #firm;
  #model;
  #price;
  #engine;
  #driveUnit;
  #yearOfProduction;
  #gearbox;
  #doorsCount;

  constructor({
    firm,
    model,
    price,
    engine,
    driveUnit,
    yearOfProduction,
    gearbox,
    doorsCount = 4,
  }) {
    isExisting(price) && (this.#price = price);
    isExisting(firm) && (this.#firm = firm);
    isExisting(model) && (this.#model = model);
    isExisting(engine) && (this.#engine = engine);
    isExisting(driveUnit) && (this.#driveUnit = driveUnit);
    isExisting(yearOfProduction) && (this.#yearOfProduction = yearOfProduction);
    isExisting(gearbox) && (this.#gearbox = gearbox);
    isExisting(doorsCount) && (this.#doorsCount = doorsCount);
  }

  get price() {
    return this.#price;
  }

  set price(price) {
    this.#price = price;
  }

  get firm() {
    return this.#firm;
  }

  set firm(firm) {
    this.#firm = firm;
  }

  get model() {
    return this.#model;
  }

  set model(model) {
    this.#model = model;
  }

  get engine() {
    return this.#engine;
  }

  set engine(engine) {
    this.#engine = engine;
  }

  get driveUnit() {
    return this.#driveUnit;
  }

  set driveUnit(driveUnit) {
    this.#driveUnit = driveUnit;
  }

  get yearOfProduction() {
    return this.#yearOfProduction;
  }

  set yearOfProduction(yearOfProduction) {
    this.#yearOfProduction = yearOfProduction;
  }

  get gearbox() {
    return this.#gearbox;
  }

  set gearbox(gearbox) {
    this.#gearbox = gearbox;
  }

  get doorsCount() {
    return this.#doorsCount;
  }

  set doorsCount(doorsCount) {
    this.#doorsCount = doorsCount;
  }
}
