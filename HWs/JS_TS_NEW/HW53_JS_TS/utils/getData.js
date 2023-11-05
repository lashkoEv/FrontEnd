async function fetchJson(URL) {
  const response = await fetch(URL);
  const parseData = await response.json();

  return parseData;
}

export async function getData() {
  const data = {};

  try {
    const results = await fetchJson("https://swapi.dev/api/");

    for (const key in await results) {
      data[key] = [];
    }
  } catch (e) {
    console.error(e);
  }

  return data;
}
