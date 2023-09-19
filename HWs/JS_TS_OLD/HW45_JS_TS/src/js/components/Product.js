export class Product {
  #image;
  #name;
  #price;

  constructor(image, name, price) {
    this.#image = image;
    this.#name = name;
    this.#price = price;
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  show(count) {
    $(".product__img").attr("src", this.#image);
    $(".product__price").val(this.#price * count + "$");
  }
}
