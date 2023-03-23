import { User } from "./components/User/User";
import { Product } from "./components/Product/Product";
import { products } from "./model/products";
// import { representation } from "./utils/representation";

class Run {
  // static
  static run() {
    let isRunning = true;

    const user = new User("John", "Doe", 250);

    while (isRunning) {
      const userChoose = prompt("a) Show Product b) Profile q)Quit");

      switch (userChoose.toLowerCase()) {
        case "a":
          // arr method .method()
          const parsedProducts = products.map(function (product, i) {
            // const presentationOfProduct = representation.bind(product);
            // console.log(presentationOfProduct());

            const updatedProduct = new Product(
              product.label,
              product.description,
              product.price + 20
            );

            console.log(updatedProduct.representation());

            return updatedProduct;
          });

          const productName = prompt(
            `Enter product's name that you want to buy :`
          );

          // ! try .. catch ?

          // Handle errors

          if (productName) {
            console.log("[BEFORE]", user.money);
            try {
              const productsIndex = parsedProducts.findIndex(
                (product) =>
                  product.label.toLowerCase() === productName.toLowerCase()
              );
              user.buy(parsedProducts[productsIndex].price);
              // user.buy();
              console.log("[AFTER]", user.money);
            } catch (e) {
              console.log("Error: ", e);
            }
          }
          break;

        case "b":
          console.log(user);
          break;

        case "q":
          isRunning = false;
          break;

        default:
          break;
      }
    }
  }
}

Run.run();
