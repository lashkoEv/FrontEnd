import { useContext, useState } from "react";
import { ProductContext } from "../../contexts";
import { Product, Button } from "../../components";

export const CategoriesPage = () => {
  const products = useContext(ProductContext);

  const categories = [...new Set(products.all.map((p) => p.category))];

  const [toShow, setToShow] = useState([]);

  function changeCategory(category) {
    setToShow(products.all.filter((p) => p.category === category));
  }

  function onBuyHandler(product) {
    if (!products.inCart.includes(product)) {
      products.inCart.push(product);
    }
  }

  return (
    <>
      <div className="w-full flex justify-center items-center gap-6">
        {categories.map((category, i) => (
          <Button
            key={i}
            text={category}
            onClickHandler={() => changeCategory(category)}
          />
        ))}
      </div>

      <div className="py-6 px-64 grid grid-cols-4 gap-8">
        {toShow.map((p) => (
          <Product
            key={p.title}
            data={p}
            onClickHandler={() => onBuyHandler(p)}
            text={"Buy"}
          />
        ))}
      </div>
    </>
  );
};
