const key = "632263edb588b456786ff279e4e12517";

export const requests = {
  PopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  trending: `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${key}`,
  nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
  tvSeries: `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${key}`,
  Top_tv: `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${key}`,
};

export default requests;
