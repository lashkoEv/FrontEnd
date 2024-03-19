import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import { HomePage, LoginPage } from "./pages";

export const getRoutes = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    )
  );
};
