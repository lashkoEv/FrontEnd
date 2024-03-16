import { useContext } from "react";
import { ProductContext } from "../../contexts";
import { Product } from "../../components";

export const CartPage = () => {
  const products = useContext(ProductContext);

  return (
    <div className="py-6 px-64 grid grid-cols-4 gap-8">
      {useContext(ProductContext).inCart.map((product, i) => (
        <Product key={i} data={product} inCart={true} />
      ))}
    </div>
  );
};
