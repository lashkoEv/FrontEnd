import { Product } from "../schemas";

export const getProducts = () => {
  const products = [
    new Product(
      1,
      "Long Shadows",
      "David Baldacci",
      "$ 13.02",
      "images/book1.jpg"
    ),
    new Product(
      2,
      "Less Is Lost",
      "Andrew Sean Greer",
      "$ 15.68",
      "images/book2.jpg"
    ),
    new Product(
      3,
      "Shrines of Gaiety",
      "Kate Atkinson",
      "$ 23.15",
      "images/book3.jpg"
    ),
    new Product(
      4,
      "Before I Do",
      "Sophie Cousens",
      "$ 12.42",
      "images/book4.jpg"
    ),
    new Product(
      5,
      "Hester",
      "Laurie Lico Albanese",
      "$ 14.61",
      "images/book5.jpg"
    ),
    new Product(
      6,
      "Treasure State",
      "C. J. Box",
      "$ 15.23",
      "images/book6.webp"
    ),
    new Product(7, "The Match", "Harlan Coben", "$ 5.96", "images/book7.webp"),
    new Product(8, "Finding Me", "Viola Davis", "$ 16.82", "images/book8.jpg"),
    new Product(
      9,
      "The Candy House",
      "Jennifer Egan",
      "$ 18.17",
      "images/book9.jpg"
    ),
    new Product(
      10,
      "The Investigator",
      "John Sandford",
      "$ 6.90",
      "images/book10.webp"
    ),
    new Product(
      11,
      "In the Blood",
      "Jack Carr",
      "$ 11.89",
      "images/book11.jpg"
    ),
    new Product(
      12,
      "The Paris Apartment",
      "Lucy Foley",
      "$ 14.07",
      "images/book12.jpg"
    ),
    new Product(
      13,
      "Twilight",
      "Stephenie Meyer",
      "$ 4.90",
      "images/book13.webp"
    ),
    new Product(
      14,
      "Harry Potter and the Deathly Hallows",
      "J. K. Rowling",
      "$ 4.97",
      "images/book14.webp"
    ),
    new Product(
      15,
      "Night",
      "Elie Wiesel, Marion Wiesel",
      "$ 4.75",
      "images/book15.webp"
    ),
    new Product(
      16,
      "The Power of Now",
      "Eckhart Tolle",
      "$ 5.15",
      "images/book16.webp"
    ),
    new Product(
      17,
      "The Judge's List",
      "John Grisham",
      "$ 5.95",
      "images/book17.webp"
    ),
    new Product(
      18,
      "The Vanishing Half",
      "Brit Bennett",
      "$ 5.48",
      "images/book18.jpg"
    ),
  ];

  return products;
};
