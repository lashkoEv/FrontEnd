export class User {
  constructor(name, surname, money) {
    this.name = name;
    this.surname = surname;
    this.money = money;
  }

  buy(price) {
    if (this.money >= price) {
      this.money -= price;
    }
  }
}

// const joe = {
//   sayHello: function () {
//     console.log("HELLO!!!");
//   },
// };

// User.prototype.isAdmin = false;

// const user = new User("John", "Doe", 200);

// user.__proto__ = joe;

// // console.log(user.isAdmin);
// console.log("[user]", user);
// user.sayHello();
