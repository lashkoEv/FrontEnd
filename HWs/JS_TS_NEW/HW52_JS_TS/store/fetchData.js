export async function fetchData(URL) {
  const response = await fetch(URL);
  const parseData = await response.json();
  const results = await parseData.results;

  return results;
}

export async function fetchJson(URL) {
  const response = await fetch(URL);
  const parseData = await response.json();

  return parseData;
}
