import { isExisting } from "../../../utils";

// SRP (single reason for change)
// OCP (private, getters/setters)
export class House {
  #price;
  #area;
  #description;
  #address;
  #numberOfRooms;
  #imgSrc;

  constructor({ price, area, description, address, numberOfRooms, imgSrc }) {
    isExisting(price) && (this.#price = price);
    isExisting(area) && (this.#area = area);
    isExisting(description) && (this.#description = description);
    isExisting(address) && (this.#address = address);
    isExisting(numberOfRooms) && (this.#numberOfRooms = numberOfRooms);
    isExisting(imgSrc) && (this.#imgSrc = imgSrc);
  }

  get price() {
    return this.#price;
  }

  set price(price) {
    this.#price = price;
  }

  get area() {
    return this.#area;
  }

  set area(area) {
    this.#area = area;
  }

  get description() {
    return this.#description;
  }

  set description(description) {
    this.#description = description;
  }

  get address() {
    return this.#address;
  }

  set address(address) {
    this.#address = address;
  }

  get numberOfRooms() {
    return this.#numberOfRooms;
  }

  set numberOfRooms(numberOfRooms) {
    this.#numberOfRooms = numberOfRooms;
  }

  get imgSrc() {
    return this.#imgSrc;
  }

  set imgSrc(imgSrc) {
    this.#imgSrc = imgSrc;
  }
}
