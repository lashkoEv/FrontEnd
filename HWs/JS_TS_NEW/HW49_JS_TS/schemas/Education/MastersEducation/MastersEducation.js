import { Education } from "../..";

export class MastersEducation extends Education {
  constructor({
    GPA,
    isDiplomaWithHonors,
    branchOfKnowledge,
    specialty,
    imgSrc,
  }) {
    super({ GPA, isDiplomaWithHonors, branchOfKnowledge, specialty, imgSrc });
  }
}
