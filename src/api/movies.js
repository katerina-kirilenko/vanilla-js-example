const API_KEY = '3ed64303';

export async function getMoviesByQuery(query) {
  const url = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`

  const res = await fetch(url);
  const data = await res.json();
 
  return data
}