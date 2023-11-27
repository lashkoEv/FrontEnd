export async function getCurrencies() {
  const response = await fetch("https://api.frankfurter.app/currencies");

  const parsedData = await response.json();

  const currencies: string[] = [];

  for (const currency in parsedData) {
    currencies.push(currency);
  }

  return currencies;
}
