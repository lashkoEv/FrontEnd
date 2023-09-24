import { Component } from "./core/Component.js";
import { render } from "./core/render.js";
import { closure } from "./utils/closure.js";

import "./style/style.css";
import "./style/media.css";

const app = () => {
  const data = closure();

  const aboutUs = new Component({
    tagName: "div",
    className: "block",
    textContent: "About Us",
  });

  const music = new Component({
    tagName: "div",
    className: "block",
    textContent: "Music",
  });

  const video = new Component({
    tagName: "div",
    className: "block",
    textContent: "Video",
  });

  const blocks = new Component({
    tagName: "div",
    className: "blocks",
    events: {
      click: ({ target }) => {
        data(target);
      },
    },
    children: [aboutUs, music, video],
  });

  const history = new Component({
    tagName: "div",
    className: "block history",
    textContent: "History:",
  });

  const root = new Component({
    tagName: "div",
    className: "app",
    children: [blocks, history],
  }).toHTML();

  render(document.body, root);
};

app();
