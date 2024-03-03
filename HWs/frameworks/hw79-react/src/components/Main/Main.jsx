import "./Main.css";

const products = [
  {
    title: "Fourth Wing (The Empyrean, 1 book)",
    author: "Rebecca Yarros",
    price: "13.79$",
    src: "images/products/1.jpg",
  },
  {
    title: "Iron Flame (The Empyrean, 2 book)",
    author: "Rebecca Yarros",
    price: "14.99$",
    src: "images/products/2.jpg",
  },
  {
    title: "Sanctuary of the Shadow",
    author: "Aurora Ascher",
    price: "19.05$",
    src: "images/products/3.jpg",
  },
  {
    title: "Five Broken Blades",
    author: "Mai Corland",
    price: "14.99$",
    src: "images/products/4.jpg",
  },
  {
    title: "Bloodguard",
    author: "Cecy Robson",
    price: "16.05$",
    src: "images/products/5.jpg",
  },
  {
    title: "The Half King",
    author: "Melissa Landers",
    price: "12.79$",
    src: "images/products/6.jpg",
  },
  {
    title: "The Last One",
    author: "Rachel Howzell Hall",
    price: "19.05$",
    src: "images/products/7.jpg",
  },
  {
    title: "The Wren in the Holly Library",
    author: "K.A. Linde",
    price: "10.69$",
    src: "images/products/8.jpg",
  },
];

export const Main = () => {
  return (
    <main className="main">
      <div className="products">
        {products.map((item) => (
          <div className="product">
            <img src={item.src} alt="Product" className="image" />

            <h3 className="title">{item.title}</h3>

            <p className="author">by {item.author}</p>

            <h3 className="price">{item.price}</h3>

            <div className="icon-wrapper">
              <i class="fa-solid fa-cart-shopping icon"></i>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
