/*
 * Functions for correct data entry
 */

function getCorrectNumber(question) {
  let isCorrect = false;

  while (!isCorrect) {
    let answer = prompt(question);

    let isCorrectNumber = answer && !isNaN(+answer) && +answer > 0;

    if (isCorrectNumber) {
      return +answer;
    }
  }
}

function getCorrectString(question) {
  let isCorrect = false;

  while (!isCorrect) {
    let answer = prompt(question);

    if (answer?.length > 0) {
      return answer;
    }
  }
}

/*
 * Fabrics
 */

function Car(label, price, wheels = 4) {
  return {
    label,
    price,
    wheels,
  };
}

function Sedan(label, price, color = "black") {
  return Object.assign(Car(label, price), {
    type: "sedan",
    color: color,
    signal: () => "Beep!",
  });
}

function Truck(label, price, color = "black") {
  const wheels = 8;

  return Object.assign(Car(label, price, wheels), {
    type: "truck",
    color: color,
    signal: () => "WooW!",
  });
}

/*
 * Input a cars array
 */

function getCarData() {
  const label = getCorrectString("Enter a label:");
  const price = getCorrectNumber("Enter a price:");
  const color = getCorrectString("Enter a color:");

  return {
    label,
    price,
    color,
  };
}

function getSedans(amount) {
  const sedans = [];

  for (let i = 0; i < amount; i++) {
    alert(`Enter a ${i + 1} sedan data:`);

    const carData = getCarData();

    sedans.push(Sedan(carData.label, carData.price, carData.color));
  }

  return sedans;
}

function getTrucks(amount) {
  const trucks = [];

  for (let i = 0; i < amount; i++) {
    alert(`Enter a ${i + 1} truck data:`);

    const carData = getCarData();

    trucks.push(Truck(carData.label, carData.price, carData.color));
  }

  return trucks;
}

function getCars() {
  const amount = 3;

  return {
    sedan: getSedans(amount),
    truck: getTrucks(amount),
  };
}

/*
 * Task 1 (Get all truck labels and print it to the console)
 */

function getTruckLabels(trucks) {
  return trucks.reduce((result, car) => {
    result += `"${car.label}"; `;
    return result;
  }, "");
}

/*
 * Task 2 (How much cost: all sedans, all trucks, and then all auto)
 */

function getSedansCost(sedans) {
  return sedans.reduce((total, car) => {
    return (total += car.price);
  }, 0);
}

function getTrucksCost(trucks) {
  return trucks.reduce((total, car) => {
    return (total += car.price);
  }, 0);
}

function getAllCarsCost(cars) {
  return getSedansCost(cars.sedan) + getTrucksCost(cars.truck);
}

/*
 * Task 3 (Concat arr truck and sedan in allInOne)
 */

function concatCars(cars) {
  return cars.sedan.concat(cars.truck);
}

/*
 * Task 4 (Get from allInOne only truck, only sedan)
 */

function getCarsFromAllInOne(allInOne, type) {
  return allInOne.filter((car) => {
    if (car.type === type) return car;
  });
}

/*
 * Task 5 (Find elem by index '1' in allInOne and next + prev => [prev, 1, next])
 */

function getNeighborsByIndex(allInOne, index) {
  return allInOne.slice(index - 1, index + 2);
}

/*
 * Main function
 */

function app() {
  const cars = getCars();

  console.log("[TRUCK LABELS]", getTruckLabels(cars.truck));

  console.log("[SEDANS COST]", getSedansCost(cars.sedan));
  console.log("[TRUCKS COST]", getTrucksCost(cars.truck));
  console.log("[ALL CARS COST]", getAllCarsCost(cars));

  const allInOne = concatCars(cars);

  console.log("[ALL IN ONE]");
  console.table(allInOne);

  console.log("[SEDANS FROM ALL IN ONE]");
  console.table(getCarsFromAllInOne(allInOne, "sedan"));

  console.log("[TRUCKS FROM ALL IN ONE]");
  console.table(getCarsFromAllInOne(allInOne, "truck"));

  console.log("[ELEMENT NEIGHBORS BY INDEX 1]");
  console.table(getNeighborsByIndex(allInOne, 1));
}

app();
