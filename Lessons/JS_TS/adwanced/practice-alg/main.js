import "./style.css";
//  Trains [ driver = "John" , carriages : [ {​​ color : darkmagenta , id : 8 }​​ , {​​ color : blue , id : 8 }​​ , {​​ color : yellow , id : 8 }​​ ]] --- [  driver = "Jim"  , carriages : [ {​​ color : darkmagenta , id : 8 }​​ ]] --- [ driver = "Mike"  , carriages : [ {​​ color : darkmagenta , id : 8 }​​ ]] --- [ driver = "Tyson" , carriages : [ {​​ color : darkmagenta , id : 8 }​​ ]]

const trains = [
  {
    driver: "John",
    carriages: [
      {
        color: "darkmagenta",
        id: 1,
      },
      {
        color: "blue",
        id: 2,
      },
      {
        color: "yellow",
        id: 3,
      },
    ],
  },
  {
    driver: "Jim",
    carriages: [
      {
        color: "darkmagenta",
        id: 4,
      },
    ],
  },
  {
    driver: "Mike",
    carriages: [
      {
        color: "darkmagenta",
        id: 5,
      },
    ],
  },
  {
    driver: "Tyson",
    carriages: [
      {
        color: "darkmagenta",
        id: 6,
      },
      {
        color: "darkmagenta",
        id: 7,
      },
      {
        color: "darkmagenta",
        id: 8,
      },
    ],
  },
];

const findByColor = (trains, color) => {
  const found = [];

  trains.forEach((train) => {
    const carriages = train.carriages.filter(
      (carriage) => carriage.color === color
    );

    if (Array.isArray(carriages)) {
      carriages.forEach((carriage) => {
        found.push({
          name: train.driver,
          color: carriage.color,
          id: carriage.id,
        });
      });
    }
  });

  return found;
};

const res = findByColor(trains, "darkmagenta");
console.log(res);

const findById = (trains, id) => {
  const found = [];

  trains.forEach((train) => {
    const carriages = train.carriages.filter((carriage) => carriage.id === id);

    carriages.forEach((carriage) => {
      found.push({
        name: train.driver,
        color: carriage.color,
        id: carriage.id,
      });
    });
  });

  return found;
};

const res2 = findById(trains, 3);
console.log(res2);

const findByColorAndId = (trains, color, id) => {
  const found = [];

  trains.forEach((train) => {
    const carriages = train.carriages.filter(
      (carriage) => carriage.id === id && carriage.color === color
    );

    carriages.forEach((carriage) => {
      found.push({
        name: train.driver,
        color: carriage.color,
        id: carriage.id,
      });
    });
  });

  return found;
};

const res3 = findByColorAndId(trains, "yellow", 4);
console.log(res3);
