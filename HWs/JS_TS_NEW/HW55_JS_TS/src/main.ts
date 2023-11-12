import { App } from "./apps";
import { trains } from "./data";

import "./style.css";

const app = new App(trains);

const color = "darkmagenta";
const id = 7;

console.log(`Find by color '${color}': `);
console.table(app.findByColor(color));

console.log(`Find by id '${id}': `);
console.table(app.findById(id));

console.log(`Find by id '${id}' and color '${color}': `);
console.table(app.findByColorAndId(color, id));
