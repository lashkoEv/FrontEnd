"use strict";

const products = [
  {
    id: createID(),
    label: "Samsung",
    image: "https://m.media-amazon.com/images/I/91W42b8YW+L._SX679_.jpg",
    price: 2323 + "$",
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem
      perferendis id, maiores reprehenderit ea iste inventore facilis? Sint vitae
      maiores at voluptatem!
      `,
  },
  {
    id: createID(),
    label: "LG",
    image: "https://m.media-amazon.com/images/I/41sJEnpfOUL.jpg",
    price: 1313 + "$",
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatem
      perferendis id, maiores reprehenderit ea iste inventore facilis? Sint vitae
      maiores at voluptatem!
      `,
  },
];

const users = [
  {
    id: createID(),
    login: "kir",
    password: "2323",
    isAdmin: true,
  },
  {
    id: createID(),
    login: "admin",
    password: "0000",
    isAdmin: true,
  },
];

function getUserID(user, arr) {
  let isLoggedIn = false;

  for (const item of arr) {
    const isUserExists =
      item.login === user.login && item.password === user.password;

    if (isUserExists) {
      isLoggedIn = true;
      return item.id;
    }
  }

  if (!isLoggedIn) {
    console.error("You should to create an account before authorization!");
    return null;
  }
}

function addNewUser(user, arr) {
  const newUser = {
    id: createID(),
    login: user.login,
    password: user.password,
    isAdmin: false,
  };
  arr.push(newUser);

  return newUser.id;
}

function showProducts(arr) {
  console.table(arr);
}

function createID() {
  return "id:" + Math.random().toString().slice(3, 8);
}

function getLoginAndPassword() {
  const login = prompt("Enter your login : ");
  const password = prompt("Enter your password : ");

  return {
    login,
    password,
  };
}

function getUserByID(userID, users) {
  return users.filter(function (user) {
    if (user.id === userID) return user;
  });
}

function getProfile(userID) {
  if (!userID) {
    console.error("You should to create an account before authorization");
  } else {
    console.table(getUserByID(userID, users));
  }
}

function app() {
  let isRunning = true;

  let userID = false;

  while (isRunning) {
    const userChoose = prompt(`
        1) Login
        2) Register
        3) Show products
        4) Profile
        5) Exit
      `);

    switch (userChoose) {
      case "1":
        userID = getUserID(getLoginAndPassword(), users);
        break;

      case "2":
        userID = addNewUser(getLoginAndPassword(), users);
        break;

      case "3":
        showProducts(products);
        break;

      case "4":
        getProfile(userID);
        break;

      case "5":
        isRunning = false;
        break;

      default:
        break;
    }
  }
}

app();
