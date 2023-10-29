import { App } from "./apps";
import { setSpinner } from "./store";
import { setInfoBox } from "./store/getInfoBox";
import "./style.css";

setSpinner();
setInfoBox();

const appComp = new App();
appComp.load();