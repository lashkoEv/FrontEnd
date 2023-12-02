import { ProductController } from "./schemas/ProductController/ProductController";
import "./style.css";

const p = new ProductController();

const products = p.getAll();

console.log(products);

products.forEach((product) => {
  const img = document.createElement("img");

  img.src = product.getImageUrl();

  app.append(img);
});
