import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Product } from "../components";

export const HomePage = () => {
  const products = useContext(ProductContext);

  return (
    <section className="grid gap-6 w-full grid-cols-6 p-32">
      {products.map((p, i) => {
        return <Product key={i} data={p} />;
      })}
    </section>
  );
};
