import { isExisting } from "../../../utils";

// SRP (single reason for change)
// OCP (private, getters/setters)
export class Education {
  #GPA;
  #isDiplomaWithHonors;
  #branchOfKnowledge;
  #specialty;
  #imgSrc;

  constructor({
    GPA = 0,
    isDiplomaWithHonors = false,
    branchOfKnowledge,
    specialty,
    imgSrc,
  }) {
    isExisting(GPA) && (this.#GPA = GPA);
    isExisting(specialty) && (this.#specialty = specialty);
    isExisting(imgSrc) && (this.#imgSrc = imgSrc);

    isExisting(isDiplomaWithHonors) &&
      (this.#isDiplomaWithHonors = isDiplomaWithHonors);

    isExisting(branchOfKnowledge) &&
      (this.#branchOfKnowledge = branchOfKnowledge);
  }

  get GPA() {
    return this.#GPA;
  }

  set GPA(GPA) {
    this.#GPA = GPA;
  }

  get isDiplomaWithHonors() {
    return this.#isDiplomaWithHonors;
  }

  set isDiplomaWithHonors(isDiplomaWithHonors) {
    this.#isDiplomaWithHonors = isDiplomaWithHonors;
  }

  get branchOfKnowledge() {
    return this.#branchOfKnowledge;
  }

  set branchOfKnowledge(branchOfKnowledge) {
    this.#branchOfKnowledge = branchOfKnowledge;
  }

  get specialty() {
    return this.#specialty;
  }

  set specialty(specialty) {
    this.#specialty = specialty;
  }

  get imgSrc() {
    return this.#imgSrc;
  }

  set imgSrc(imgSrc) {
    this.#imgSrc = imgSrc;
  }
}
