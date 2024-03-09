import { Route, Routes } from "react-router-dom";

export const Router = (props) => {
  return (
    <Routes>
      {props.routes.map((route, i) => (
        <Route key={i} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
