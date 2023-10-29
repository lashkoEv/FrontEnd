// Lead every promise to async/await syntax

import {
  App,
  Header,
  Main,
  Footer,
  Form,
  Button,
  Input,
  Spinner,
} from "./components";
import { Component } from "./core";

import "./public/style.scss";

const header = new Header({}).toHTML();
const main = new Main({}).toHTML();
const footer = new Footer({}).toHTML();

const app = new App({
  children: [header, main, footer],
}).toHTML();

const portal = new Component({
  tagName: "div",
  className: "portal--active",
}).toHTML();

const spiner = new Spinner({}).toHTML();

portal.append(spiner);

document.body.append(portal, app);

fetch("https://swapi.dev/api/")
  .then((res) => {
    const json = res.json();
    return json;
  })
  .then((res) => {
    // decrease nested lvls
    for (const key in res) {
      header.append(
        new Button({
          textContent: key,
          events: {
            click: () => {
              fetch(`https://swapi.dev/api/${key}`)
                .then((res) => {
                  return res.json();
                })
                .then((res) => {
                  console.log("[res]", res);
                });
            },
          },
        }).toHTML()
      );
    }
  });

// Write function which will recieve data
// Write function which will append data on the screen
fetch("https://swapi.dev/api/films/")
  .then((res) => {
    const json = res.json();
    return json;
  })
  .then((res) => {
    portal.className = "portal";

    res.results.forEach((el) => {
      main.innerHTML += `
            <h3>${el.title}</h3>
        `;
    });
  })
  .catch((e) => {
    console.log("[e]", e);
  });
