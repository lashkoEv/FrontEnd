type student = {
  firstName: string;
  age: number;
  skills: string[];
  pocket: { left: string[]; right: string[] };
};

const group: student[] = [
  {
    firstName: "John",
    age: 23,
    skills: ["HTML", "CSS", "JS"],
    pocket: { left: ["keys", "food"], right: ["docs", "snickers"] },
  },
  {
    firstName: "John",
    age: 23,
    skills: ["HTML", "CSS"],
    pocket: { left: ["docs", "food"], right: ["keys", "snickers"] },
  },
  {
    firstName: "John",
    age: 23,
    skills: ["JS"],
    pocket: { left: ["flashlight", "cigarettes"], right: ["rat", "cheese"] },
  },
];

/*
 * Task 1
 * If even one of group have a flashlight return "good sheet"
 */

function checkFlashlight(group: student[]): string {
  let isPresent = group.some(function (student) {
    const isFlashlightPresent =
      student.pocket.left.includes("flashlight") ||
      student.pocket.right.includes("flashlight");

    if (isFlashlightPresent) {
      return true;
    }
  });

  if (isPresent) {
    return "Good sheet!";
  } else {
    return "No, sorry";
  }
}

console.log("[HAVE A FLASHLIGHT?]", checkFlashlight(group));

/*
 * Task 2
 * Sum of age into the group
 */

function getTotalAge(group: student[]): number {
  let totalAge = 0;

  group.forEach((student) => {
    totalAge += student.age;
  });

  return totalAge;
}

console.log("[TOTAL AGE]", getTotalAge(group));

/*
 * Task 3
 * Divide group on three groups : "Who knows JS" , "Who don'ts know JS" , "Who knows CSS"
 */

type groups = {
  knowsJS: student[];
  doesNotKnowJS: student[];
  knowsCSS: student[];
};

function getDividedGroup(group: student[]): groups {
  const knowsJS = group.filter(function (student) {
    if (student.skills.includes("JS")) return student;
  });

  const doesNotKnowJS = group.filter(function (student) {
    if (!student.skills.includes("JS")) return student;
  });

  const knowsCSS = group.filter(function (student) {
    if (student.skills.includes("CSS")) return student;
  });

  return {
    knowsJS,
    doesNotKnowJS,
    knowsCSS,
  };
}

function printDividedGroup(dividedGroup: groups): void {
  console.log("[KNOWS JS]", dividedGroup.knowsJS);
  console.log("[DOESN'T KNOW JS]", dividedGroup.doesNotKnowJS);
  console.log("[KNOWS CSS]", dividedGroup.knowsCSS);
}

printDividedGroup(getDividedGroup(group));
