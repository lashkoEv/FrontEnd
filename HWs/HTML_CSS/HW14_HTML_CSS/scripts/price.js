var price = document.getElementById("price");
var priceValue = document.getElementById("price-value");

priceValue.innerHTML = price.value + "$";

price.oninput = function () {
  priceValue.innerHTML = this.value + "$";
};
