export const getWikiResults = async (searchTerm) => {
  const res =
    await fetch(`https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.NEXT_PUBLIC_SERPAPI_KEY}
  `);

  const data = await res.json();
  return data;
};
