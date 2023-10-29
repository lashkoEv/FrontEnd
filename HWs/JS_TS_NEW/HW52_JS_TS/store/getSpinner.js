import { Spinner } from "../components";

let spinner;

export const setSpinner = () => {
  spinner = new Spinner();
};

export const getSpinner = () => {
  return spinner.component;
};
