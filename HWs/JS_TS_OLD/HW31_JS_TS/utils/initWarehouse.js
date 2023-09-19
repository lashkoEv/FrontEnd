import { Product } from "../components/Product/Product.js";
import { Warehouse } from "../components/Warehouse/Warehouse.js";

export function initWarehouse() {
  const warehouse = new Warehouse();

  warehouse.addProduct(new Product(1, "Milk 1l", 25));
  warehouse.addProduct(new Product(2, "Cheese 200g", 30));
  warehouse.addProduct(new Product(3, "Potatoes 1kg", 35));
  warehouse.addProduct(new Product(4, "Rice 1kg", 40));
  warehouse.addProduct(new Product(5, "Beef 500g", 50));

  return warehouse;
}
