import { isExisting, checkLvl } from "../../utils";

export class City {
  #totalArea;
  #houses;
  #humans;
  #pollutionLvl;
  #highwayDevelopmentLvl;
  #infrastructureDevelopmentLvl;
  #isIndustrial;

  constructor({
    totalArea,
    houses = [],
    humans = [],
    pollutionLvl = 1,
    highwayDevelopmentLvl = 1,
    infrastructureDevelopmentLvl = 1,
    isIndustrial = true,
  }) {
    isExisting(totalArea) && (this.#totalArea = totalArea);
    isExisting(houses) && (this.#houses = houses);
    isExisting(humans) && (this.#humans = humans);
    isExisting(isIndustrial) && (this.#isIndustrial = isIndustrial);

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
}
