import "./App.css";

import { RouterProvider } from "react-router-dom";

import { getRouter } from "./routes";

function App() {
  return <RouterProvider router={getRouter()} />;
}

export default App;
