import { useContext, useState } from "react";
import { ProductContext } from "../../contexts";
import { Product } from "../../components";

export const CartPage = () => {
  const products = useContext(ProductContext);

  const [toShow, setToShow] = useState(products.inCart);

  function onRemoveHandler(product) {
    products.inCart = products.inCart.filter((p) => p !== product);
    setToShow(products.inCart);
  }

  return (
    <div className="py-6 px-64 grid grid-cols-4 gap-8">
      {toShow.map((product, i) => (
        <Product
          key={i}
          data={product}
          onClickHandler={() => onRemoveHandler(product)}
          text={"Remove from cart"}
        />
      ))}
    </div>
  );
};
