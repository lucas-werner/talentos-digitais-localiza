
export async function getQuery(query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
