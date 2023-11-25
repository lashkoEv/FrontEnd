import { Button, Select, Option, Header, ModalWindow } from "./components";
import "./style.css";

const btn = new Button({ textContent: "Button" });
console.log(btn);
app.append(btn.getComponent().toHtml());

const o = new Option("1", "1");
console.log(o);

const sel = new Select({ children: [o.getComponent()] });
console.log(sel);
app.append(sel.getComponent().toHtml());

const h = new Header({}, {});
app.append(h.getComponent().toHtml());

const m = new ModalWindow({});
app.append(m.getComponent().toHtml());