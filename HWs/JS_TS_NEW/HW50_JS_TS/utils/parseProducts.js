import { Product } from "../schemas";

export const parseProducts = (jsonProducts) => {
  const parsedProducts = JSON.parse(jsonProducts);

  return getProductsArray(parsedProducts);
};

const getProductsArray = (parsedProducts) => {
  const productsArray = [];

  for (let product of parsedProducts) {
    productsArray.push(getProduct(product));
  }

  return productsArray;
};

const getProduct = (productObj) => {
  return new Product({
    category: productObj.category,
    price: productObj.price,
    manufacturer: productObj.manufacturer,
    createdAt: productObj.createdAt,
  });
};
