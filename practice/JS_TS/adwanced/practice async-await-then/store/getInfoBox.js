import { InfoBox } from "../components";

let infoBox;

export const setInfoBox = () => {
  infoBox = new InfoBox();
};

export const getInfoBox = () => {
  return infoBox;
};
