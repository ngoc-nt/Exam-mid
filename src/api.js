// api.js
const { useEffect, useState } = require('react');
const { fetchDataFromApi, getYearFromDate, getImageUrl} = require('./utils');

const useGenres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const genresData = await fetchDataFromApi('genre/movie/list');
      if (genresData) {
        setGenres(genresData);
      }
    };

    fetchGenres();
  }, []);

  return genres;
};

const useSliderMovie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchDataFromApi('movie/now_playing');
      if (moviesData) {
        setMovies(moviesData.results);
      }
    };

    fetchData();
  }, []);

  return movies;
};

const useRecentlyMovie = () => {
  const [moviesRecently, setRecentlyMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const moviesRecentlyData = await fetchDataFromApi('movie/upcoming');
      if (moviesRecentlyData) {
        setRecentlyMovies(moviesRecentlyData.results);
      }
    };

    fetchData();
  }, []);

  return moviesRecently;
};

const useTrendingMovie = () => {
  const [moviesTrending, setTrendingMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const moviesTrendingData = await fetchDataFromApi('trending/movie/week');
      if (moviesTrendingData) {
        setTrendingMovies(moviesTrendingData.results);
      }
    };

    fetchData();
  }, []);

  return moviesTrending;
};  

const useReleaseMovie = () => {
  const [moviesRelease , setReleaseMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const moviesReleaseData = await fetchDataFromApi('movie/latest');
      if (moviesReleaseData) {
        setReleaseMovies(moviesReleaseData);
      }
    };

    fetchData();
  }, []);

  return moviesRelease;
};

const useRecommendedMovie = () => {
  const [moviesRecommended , setRecommendedMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const moviesRecommendedData = await fetchDataFromApi('movie/top_rated');
      if (moviesRecommendedData) {
        setRecommendedMovies(moviesRecommendedData.results);
      }
    };

    fetchData();
  }, []);

  return moviesRecommended;
};

module.exports = {
  useGenres,
  useSliderMovie,
  useRecentlyMovie,
  useTrendingMovie,
  useReleaseMovie,
  useRecommendedMovie,
  getYearFromDate,
  getImageUrl
};
