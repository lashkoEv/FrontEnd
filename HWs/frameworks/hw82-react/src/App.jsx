import { Outlet } from "react-router-dom";

import { Header, Main, Footer } from "./components";

import "./App.css";
import { useEffect, useState } from "react";
import { ProductContext } from "./context/ProductContext";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await fetch("https://dummyjson.com/products");
      const parsedData = await data.json();
      setProducts(parsedData.products.slice(0, 12));
    })();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      <div className="min-h-screen w-full">
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
