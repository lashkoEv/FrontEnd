import { Button } from "../components";
import { fetchJson } from "./";

export async function getButtons() {
  const buttons = [];

  try {
    const results = await fetchJson("https://swapi.dev/api/");

    for (const key in await results) {
      buttons.push(new Button(key).component);
    }
  } catch (e) {
    console.error(e);
  }

  return buttons;
}
