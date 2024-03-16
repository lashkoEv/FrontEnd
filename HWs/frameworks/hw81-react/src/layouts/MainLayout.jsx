import { NavLink, Outlet } from "react-router-dom";

import { Header, Main, Footer } from "../components";

export const MainLayout = () => {
  return (
    <div className="root-layout h-full flex flex-col justify-between align-center bg-gray-700 text-white">
      <Header>
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/products">
          Products
        </NavLink>
        <NavLink className="link" to="/categories">
          Categories
        </NavLink>
        <NavLink className="link" to="/cart">
          Cart
        </NavLink>
      </Header>

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </div>
  );
};
