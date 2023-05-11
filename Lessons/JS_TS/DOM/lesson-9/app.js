// * Sending messages

// class Observer {
//   #callbacks;

//   constructor() {
//     this.#callbacks = [];
//   }

//   subscribe(callback) {
//     this.#callbacks.push(callback);
//   }

//   broadcast() {
//     this.#callbacks.forEach((callback) => callback());
//   }

//   clear() {
//     this.#callbacks = [];
//   }
// }

// class SimpleClass {
//   printMessage = () => {
//     console.log("message");
//   };
// }

// const app = () => {
//   const observer = new Observer();

//   const first = new SimpleClass();
//   const second = new SimpleClass();

//   observer.subscribe(first.printMessage);
//   observer.subscribe(second.printMessage);

//   observer.broadcast();
// };

// app();

// * Dynamic dispatch

// class Pet {
//   getSound() {}
// }

// class Cat {
//   getSound() {
//     return "Meow";
//   }
// }

// class Lion {
//   getSound() {
//     return "Roar";
//   }
// }

// const printSound = (animal) => {
//   console.log(animal.getSound());
// };

// const app = () => {
//   printSound(new Cat());
//   printSound(new Lion());
// };

// app();

// * Association

// class Salary {
//   #rate;
//   #bonus;

//   constructor(rate, bonus) {
//     this.#rate = rate;
//     this.#bonus = bonus;
//   }

//   getSalary() {
//     return this.#rate + this.#bonus;
//   }
// }

// class Employee {
//   #fullName;
//   #salary;

//   constructor(fullName) {
//     this.#fullName = fullName;
//     this.#salary = null;
//   }

//   set salary(salary) {
//     this.#salary = salary;
//   }

//   getTotalSalary() {
//     return this.#salary.getSalary() * 12;
//   }
// }

// const app = () => {
//   const salary = new Salary(1500, 500);

//   const employee = new Employee("John Doe");
//   employee.salary = salary;

//   console.log("[TOTAL SALARY]", 
//   employee.getTotalSalary());
// };

// app();


// * Aggregation

// class Salary {
//   #rate;
//   #bonus;

//   constructor(rate, bonus) {
//     this.#rate = rate;
//     this.#bonus = bonus;
//   }

//   getSalary() {
//     return this.#rate + this.#bonus;
//   }
// }

// class Employee {
//   #fullName;
//   #salary;

//   constructor(fullName, salary) {
//     this.#fullName = fullName;
//     this.#salary = salary;
//   }

//   getTotalSalary() {
//     if (this.#salary) {
//       return this.#salary.getSalary() * 12;
//     }
//   }
// }

// const app = () => {
//   const salary = new Salary(1500, 500);
//   const employee = 
//   new Employee("John Doe", 30, salary);

//   console.log("[TOTAL SALARY]", 
//   employee.getTotalSalary());
// };

// app();

// * Delegation

// class Salary {
//   #rate;
//   #bonus;

//   constructor(rate, bonus) {
//     this.#rate = rate;
//     this.#bonus = bonus;
//   }

//   #getSalary() {
//     return this.#rate + this.#bonus;
//   }

//   getTotalSalary() {
//     return this.getSalary() * 12;
//   }
// }

// class Employee {
//   #fullName;
//   #salary;

//   constructor(fullName, salary) {
//     this.#fullName = fullName;
//     this.#salary = salary;
//   }

//   getTotalSalary() {
//     if (this.#salary) {
//       return this.#salary.getTotalSalary();
//     }
//   }
// }

// const app = () => {
//   const salary = new Salary(1500, 500);
//   const employee = new Employee("John Doe", salary);

//   console.log("[TOTAL SALARY]", employee.getTotalSalary());
// };

// app();


// * Composition

// class Salary {
//   #rate;
//   #bonus;

//   constructor(rate, bonus) {
//     this.#rate = rate;
//     this.#bonus = bonus;
//   }

//   getSalary() {
//     return this.#rate + this.#bonus;
//   }
// }

// class Employee {
//   #fullName;
//   #salary;

//   constructor(fullName, rate, bonus) {
//     this.#fullName = fullName;
//     this.#salary = new Salary(rate, bonus);
//   }

//   getTotalSalary() {
//     return this.#salary.getSalary() * 12;
//   }
// }

// const app = () => {
//   const employee = 
//   new Employee("John Doe", 1500, 500);

//   console.log("[TOTAL SALARY]", 
//   employee.getTotalSalary());
// };

// app();

