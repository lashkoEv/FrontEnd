//   - модуль преобразовывания массива данных рабочих в массив объектов с данными рабочих

"use strict";

// const regex = /^Name: (\w+\s?\w+), salary: (\d+.\d+)(\D+), pets: (\w+)$/;

export const convertEmployees = (data) => {
  const regEx =
    /Name:\s(\w+\s?\w+),\s*salary:\s(\d+\D+),\s*pets:\s(\w+\s?\w+)/iu;

  const result = data.map((str) => {
    const match = str.match(regEx);
    if (match) {
      return {
        name: match[1],
        salary: match[2],
        // currency: match[3],
        pets: match[3].split(" "),
      };
    }
    return null;
  });

  // console.log(result);

  return result;
};
