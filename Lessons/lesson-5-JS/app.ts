// 1) Greeting
// 2) Get userName - userName must contain more than 2 symbols
//                 - userName must be convert into upper case
//                 - cut last 3 letters from name and reverse it
// 3) Get user age => Age must be positive number
//                 => Age must be a number
//                 => If age is not a number -> return user to prompt("Enter your age")
// 4) Узнать в год какого животного был рожден пользователь
// 4.1) Get month of birth and узнать кто наш пользователь по знак зодиака
// 5) Every step must keep propose to user => Do you wanna exit ?

alert("Hello! Glad to see you :)");

type stringType = string;
type ageType = number;
type monthType =
  | "january"
  | "february"
  | "march"
  | "april"
  | "may"
  | "june"
  | "july"
  | "august"
  | "september"
  | "october"
  | "november"
  | "december";

let switcher: boolean = true;

while (switcher) {
  let userName: stringType = prompt("Enter user name:");

  if (userName.length > 2) {
    userName = userName.toUpperCase();
    console.log("[UPPERCASE USERNAME]", userName);

    const lastThree: string = userName.slice(-3).split("").reverse().join("");
    console.log("[LAST THREE REVERSED]", lastThree);
    switcher = false;
  } else {
    alert("Must be more than 2!");
  }

  switcher = !confirm("Do you wanna exit?");
  if (!switcher) {
    break;
  }
}

switcher = true;

while (switcher) {
  const age: ageType = +prompt("Enter age:");

  if (!isNaN(age) || age > 0) {
    console.log("[AGE]", age);
    switcher = false;
  }

  switcher = !confirm("Do you wanna exit?");
  if (!switcher) {
    break;
  }
}

switcher = true;

while (switcher) {
  const animalYear: stringType = prompt("What animal year were you born in?");

  switcher = !confirm("Do you wanna exit?");
  if (!switcher) {
    break;
  }
}

switcher = true;

while (switcher) {
  const monthOfBirth: monthType = prompt("What month were you born in?");

  switch (monthOfBirth.toLowerCase()) {
    case "january":
      alert("Capricorn");
      break;

    case "february":
      alert("Aquarius");
      break;

    case "march":
      alert("Pisces");
      break;

    case "april":
      alert("Aries");
      break;

    case "may":
      alert("Taurus");
      break;

    case "june":
      alert("Gemini");
      break;

    case "july":
      alert("Cancer");
      break;

    case "august":
      alert("Leo");
      break;

    case "september":
      alert("Virgo");
      break;

    case "october":
      alert("Libra");
      break;

    case "november":
      alert("Scorpio");
      break;

    case "december":
      alert("Sagittarius");
      break;

    default:
      alert("Incorrect!");
      break;
  }

  switcher = !confirm("Do you wanna exit?");
  if (!switcher) {
    break;
  }
}

