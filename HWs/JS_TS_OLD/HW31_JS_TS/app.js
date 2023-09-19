import { Shop } from "./components/Shop/Shop.js";
import { getCorrectNumber } from "./utils/getCorrectNumber.js";

function shop() {
  const shop = new Shop();

  let isRunning = true;

  while (isRunning) {
    const menuItem = getCorrectNumber(
      `         Hello!
             1. Get all products
             2. Buy product
             3. Get profile
             4. Exit`
    );

    switch (menuItem) {
      case 1:
        shop.getAllProducts();
        break;

      case 2:
        shop.buyProduct();
        break;

      case 3:
        shop.getProfile();
        break;

      case 4:
        alert("Goodbye!");
        isRunning = false;
        break;

      default:
        alert("Incorrect! Try again!");
    }
  }
}

shop();
