import { Education } from "../..";

export class DoctoralEducation extends Education {
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
