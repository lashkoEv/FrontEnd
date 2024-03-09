import "./App.css";

import { React } from "react";
import { Link } from "react-router-dom";

import { Header } from "./components";
import { Router } from "./routes";
import { getLinks } from "./utils";

function App() {
  return (
    <div className="App">
      <Header>
        <nav className="nav">
          {getLinks().map((link, i) => (
            <Link className="link" key={i} to={link.to}>
              {link.title}
            </Link>
          ))}
        </nav>
      </Header>

      <Router />
    </div>
  );
}

export default App;
