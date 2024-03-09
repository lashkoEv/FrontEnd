import "./App.css";

import { React } from "react";
import { NavLink } from "react-router-dom";

import { Header } from "./components";
import { Router } from "./routes";
import { getLinks, getRoutes } from "./utils";

function App() {
  return (
    <div className="App">
      <Header>
        <nav className="nav">
          {getLinks().map((link, i) => (
            <NavLink className="link" key={i} to={link.to}>
              {link.title}
            </NavLink>
          ))}
        </nav>
      </Header>

      <Router routes={getRoutes()} />
    </div>
  );
}

export default App;
