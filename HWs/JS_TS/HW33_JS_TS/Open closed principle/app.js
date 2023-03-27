/*
 *   The Table class extends the Furniture class.
 *   Adds fields: shape, height, width.
 *   Adds a getSizeString method.
 */

import { Furniture } from "./components/Furniture/Furniture.js";
import { Table } from "./components/Table/Table.js";

const app = () => {
  const furniture = new Furniture("Furniture", "steel", 80);
  console.log(furniture);

  const table = new Table("Computer table", "wood", 450, 75, 100, "rectangle");
  console.log(table);
};

app();
