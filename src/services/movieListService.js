import axios from "axios";

export async function getMovieList(searchTerm) {
  const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
  return response.data;
}
