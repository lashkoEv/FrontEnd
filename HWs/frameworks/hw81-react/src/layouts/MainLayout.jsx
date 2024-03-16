import { NavLink, Outlet } from "react-router-dom";

import { Header, Main, Footer } from "../components";
import { getNavLinks, getAllProducts } from "../utils";
import { ProductContext } from "../contexts";

export const MainLayout = () => {
  const products = getAllProducts();

  return (
    <ProductContext.Provider
      value={{
        all: products,
        inCart: [],
      }}
    >
      <div className="flex min-h-full flex-col justify-between align-center bg-gray-700 text-white">
        <Header>
          {getNavLinks().map((link, i) => (
            <NavLink key={i} className="link" to={link.to}>
              {link.title}
            </NavLink>
          ))}
        </Header>

        <Main>
          <Outlet />
        </Main>

        <Footer />
      </div>
    </ProductContext.Provider>
  );
};
