export async function fetchData(key) {
  const response = await fetch(`https://swapi.dev/api/${key}`);
  const parseData = await response.json();
  const results = await parseData.results;

  return results;
}
