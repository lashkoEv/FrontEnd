import { Comparison, Error, Gallery, Home } from "../pages";

export const getRoutes = () => {
  return [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "gallery",
      element: <Gallery />,
    },
    {
      path: "comparison",
      element: <Comparison />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];
};
