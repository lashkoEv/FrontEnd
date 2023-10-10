import { Education } from "../..";

export class BachelorsEducation extends Education {
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
