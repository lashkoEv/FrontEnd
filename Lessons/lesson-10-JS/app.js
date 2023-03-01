const students = [
  {
    name: "John",
    age: 23,
    skills: ["HTML", "CSS", "JS"],
    salary: "1200$",
  },
  {
    name: "Bob",
    age: 32,
    skills: ["Python", "Jupiter", "NumPy"],
    salary: "1800$",
  },
  {
    name: "Mike",
    age: 123,
    skills: ["Java", "JS"],
    salary: "2200$",
  },
  {
    name: "Bobby",
    age: 321,
    skills: ["Assembly", "Fortran"],
    salary: "500$",
  },
  {
    name: "Jack",
    age: 13,
    skills: ["Python", "Photoshop"],
    salary: "200$",
  },
];

// * 1) Find John and print him to the console

function getJohn(students) {
  return students.find((student) => student.name === "John");
}

console.log(getJohn(students));

// * 2) Sum of salary into the group

function getTotalSalary(students) {
  return students.reduce((total, student) => {
    total += +student.salary.slice(0, -1);
    return total;
  }, 0);
}

console.log(getTotalSalary(students));

// * 3) Mediana of ages

function getAgeMean(students) {
  const total = students.reduce((total, student) => {
    total += student.age;
    return total;
  }, 0);

  return total / students.length;
}

console.log(getAgeMean(students));

// * 4) Write function which will be able to print to the console name of current user and his skills through the "*"

function printStudents(students) {
  students.forEach((user) => {
    console.log(printUserSkills(user));
  });
}

function printUserSkills(user) {
  return `${user.name} ${getSkills(user.skills)}`;
}

function getSkills(skills) {
  return skills.reduce((result, skill) => {
    result += `${skill}*`;
    return result;
  }, "");
}

printStudents(students);
// * Example : Jack able to write on Python*Java*JS

// ! Получить в виде одного массива все скиллы которые есть у студентов Без дубликатов

function getTotalSkills(students) {
  let mergedArr = [];

  students.forEach((student) => {
    student.skills.forEach((el) => {
        mergedArr.push(el);
    })
  });

  return new Set(mergedArr);
}

console.log(getTotalSkills(students));
