import { Button } from "../Components";

export const getButtons = () => {
  const buttons = [];

  buttons.push(new Button("people").component);
  buttons.push(new Button("starships").component);
  buttons.push(new Button("vehicles").component);
  buttons.push(new Button("planets").component);

  return buttons;
};
