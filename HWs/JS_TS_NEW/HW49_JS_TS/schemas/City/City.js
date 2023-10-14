import { isExisting, checkLvl } from "../../utils";

// SRP (single reason for change)
// OCP (private, getters/setters)
export class City {
  #totalArea;
  #houses;
  #humans;
  #pollutionLvl;
  #highwayDevelopmentLvl;
  #infrastructureDevelopmentLvl;
  #isIndustrial;
  #imgSrc;

  constructor({
    totalArea,
    houses = [],
    humans = [],
    pollutionLvl = 1,
    highwayDevelopmentLvl = 1,
    infrastructureDevelopmentLvl = 1,
    isIndustrial = true,
    imgSrc,
  }) {
    isExisting(totalArea) && (this.#totalArea = totalArea);
    isExisting(houses) && (this.#houses = houses);
    isExisting(humans) && (this.#humans = humans);
    isExisting(isIndustrial) && (this.#isIndustrial = isIndustrial);
    isExisting(imgSrc) && (this.#imgSrc = imgSrc);

    isExisting(pollutionLvl) &&
      checkLvl(pollutionLvl) &&
      (this.#pollutionLvl = pollutionLvl);

    isExisting(highwayDevelopmentLvl) &&
      checkLvl(highwayDevelopmentLvl) &&
      (this.#highwayDevelopmentLvl = highwayDevelopmentLvl);

    isExisting(infrastructureDevelopmentLvl) &&
      checkLvl(infrastructureDevelopmentLvl) &&
      (this.#infrastructureDevelopmentLvl = infrastructureDevelopmentLvl);
  }

  get totalArea() {
    return this.#totalArea;
  }

  set totalArea(totalArea) {
    this.#totalArea = totalArea;
  }

  get pollutionLvl() {
    return this.#pollutionLvl;
  }

  set pollutionLvl(pollutionLvl) {
    this.#pollutionLvl = pollutionLvl;
  }

  get highwayDevelopmentLvl() {
    return this.#highwayDevelopmentLvl;
  }

  set highwayDevelopmentLvl(highwayDevelopmentLvl) {
    this.#highwayDevelopmentLvl = highwayDevelopmentLvl;
  }

  get infrastructureDevelopmentLvl() {
    return this.#infrastructureDevelopmentLvl;
  }

  set infrastructureDevelopmentLvl(infrastructureDevelopmentLvl) {
    this.#infrastructureDevelopmentLvl = infrastructureDevelopmentLvl;
  }

  get isIndustrial() {
    return this.#isIndustrial;
  }

  set isIndustrial(isIndustrial) {
    this.#isIndustrial = isIndustrial;
  }

  get imgSrc() {
    return this.#imgSrc;
  }

  set imgSrc(imgSrc) {
    this.#imgSrc = imgSrc;
  }

  get houses() {
    return this.#houses;
  }

  set houses(houses) {
    this.#houses = houses;
  }

  get humans() {
    return this.#humans;
  }

  set humans(humans) {
    this.#humans = humans;
  }
}
