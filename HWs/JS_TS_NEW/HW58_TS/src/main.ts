import { getCurrencies } from "./utils";
import { Application } from "./apps";
import "./style.css";

const currencies = await getCurrencies();

const application = new Application(currencies);

application.run();
