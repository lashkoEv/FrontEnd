import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { MainLayout } from "./layouts";
import { CategoriesPage, CartPage, ProductsPage, ErrorPage } from "./pages";

export const getRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="products" element={<ProductsPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
};
