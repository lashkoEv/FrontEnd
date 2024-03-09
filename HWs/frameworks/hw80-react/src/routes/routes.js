import { Route, Routes } from "react-router-dom";
import { getRoutes } from "../utils";

export const Router = () => {
  return (
    <Routes>
      {getRoutes().map((route, i) => (
        <Route key={i} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
