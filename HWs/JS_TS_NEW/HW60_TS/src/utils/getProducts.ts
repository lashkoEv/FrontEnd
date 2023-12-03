import { Product } from "../schemas";

export const getProducts = () => {
  const products = [
    new Product(
      "product1",
      "Long Shadows",
      "David Baldacci",
      "$ 13.02",
      "images/book1.jpg"
    ),
    new Product(
      "product2",
      "Less Is Lost",
      "Andrew Sean Greer",
      "$ 15.68",
      "images/book2.jpg"
    ),
    new Product(
      "product3",
      "Shrines of Gaiety",
      "Kate Atkinson",
      "$ 23.15",
      "images/book3.jpg"
    ),
    new Product(
      "product4",
      "Before I Do",
      "Sophie Cousens",
      "$ 12.42",
      "images/book4.jpg"
    ),
    new Product(
      "product5",
      "Hester",
      "Laurie Lico Albanese",
      "$ 14.61",
      "images/book5.jpg"
    ),
    new Product(
      "product6",
      "Treasure State",
      "C. J. Box",
      "$ 15.23",
      "images/book6.webp"
    ),
    new Product("product7", "The Match", "Harlan Coben", "$ 5.96", "images/book7.webp"),
    new Product("product8", "Finding Me", "Viola Davis", "$ 16.82", "images/book8.jpg"),
    new Product(
      "product9",
      "The Candy House",
      "Jennifer Egan",
      "$ 18.17",
      "images/book9.jpg"
    ),
    new Product(
      "product10",
      "The Investigator",
      "John Sandford",
      "$ 6.90",
      "images/book10.webp"
    ),
    new Product(
      "product11",
      "In the Blood",
      "Jack Carr",
      "$ 11.89",
      "images/book11.jpg"
    ),
    new Product(
      "product12",
      "The Paris Apartment",
      "Lucy Foley",
      "$ 14.07",
      "images/book12.jpg"
    ),
    new Product(
      "product13",
      "Twilight",
      "Stephenie Meyer",
      "$ 4.90",
      "images/book13.webp"
    ),
    new Product(
      "product14",
      "Harry Potter and the Deathly Hallows",
      "J. K. Rowling",
      "$ 4.97",
      "images/book14.webp"
    ),
    new Product(
      "product15",
      "Night",
      "Elie Wiesel, Marion Wiesel",
      "$ 4.75",
      "images/book15.webp"
    ),
    new Product(
      "product16",
      "The Power of Now",
      "Eckhart Tolle",
      "$ 5.15",
      "images/book16.webp"
    ),
    new Product(
      "product17",
      "The Judge's List",
      "John Grisham",
      "$ 5.95",
      "images/book17.webp"
    ),
    new Product(
      "product18",
      "The Vanishing Half",
      "Brit Bennett",
      "$ 5.48",
      "images/book18.jpg"
    ),
  ];

  return products;
};
