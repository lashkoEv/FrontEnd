import { createContext } from "react";
import { getAllProducts } from "../utils";

export const ProductContext = createContext({
  all: getAllProducts(),
  inCart: [],
});
