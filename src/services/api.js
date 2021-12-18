const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "d930634ce0b5b68ed871edac308461c8";

let genres = [];

const getGenres = async () => {
  const response = await fetch(
    `${BASE_URL}genre/movie/list?api_key=${API_KEY}`
  );
  const data = await response.json();
  genres = data.genres;
};

const getTrendingMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${page}`
  );

  return response.json();
};

const getSearchMovie = async (movieToSearch, page = 1) => {
  const response = await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${movieToSearch}&page=${page}`
  );

  return response.json();
};

const getMovieById = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

const getMovieCast = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

const getMovieReviews = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export {
  getGenres,
  genres,
  getTrendingMovies,
  getSearchMovie,
  getMovieById,
  getMovieCast,
  getMovieReviews,
};
