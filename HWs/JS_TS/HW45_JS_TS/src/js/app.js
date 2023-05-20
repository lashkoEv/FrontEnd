import { Product } from "./components/Product.js";

const products = [];

const initProducts = () => {
  products.push(new Product("./src/public/images/1.webp", "Lolo Pets", 5));
  products.push(new Product("./src/public/images/2.webp", "Padovan", 4));
  products.push(new Product("./src/public/images/3.webp", "Versele-Laga", 6));
  products.push(new Product("./src/public/images/4.webp", "Vitakraft", 10));
};

const initForm = () => {
  $(".product__name").trigger("change");
  $(".product__count").trigger("input");
};

const setListeners = () => {
  setSelectListener();
  setCountListener();
  setBtnListener();
};

const setSelectListener = () => {
  $(".product__name").on("change", ({ target }) => {
    products.forEach((product) => {
      if (product.name === target.value) {
        product.show($(".product__count").val());
      }
    });
  });
};

const setCountListener = () => {
  $(".product__count").on("input", ({ target }) => {
    products.forEach((product) => {
      if (product.name === $(".product__name").val()) {
        product.show(target.value);
      }
    });
  });
};

const showMessage = () => {
  $(".message").animate(
    {
      opacity: 1,
    },
    1000
  );
  $(".message").animate(
    {
      opacity: 0,
    },
    1000
  );
};

const setBtnListener = () => {
  $(".product__btn").on("click", (event) => {
    event.preventDefault();
    $(".form")[0].reset();
    initForm();
    showMessage();
  });
};

const app = () => {
  initProducts();
  setListeners();
  initForm();
};

app();
