import { NavLink, Outlet } from "react-router-dom";

import { Header, Main, Footer } from "../components";
import { getNavLinks } from "../utils";

export const MainLayout = () => {
  return (
    <div className="root-layout h-full flex flex-col justify-between align-center bg-gray-700 text-white">
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
  );
};
