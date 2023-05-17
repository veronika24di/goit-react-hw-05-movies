import axios from 'axios';

const trandingMovie = 'trending/movie/day';
const nameMovie = 'search/movie';

const movieApi = axios.create({ baseURL: 'https://api.themoviedb.org/3/' });
export const moviesFetch = async () => {
  const response = await movieApi.get(trandingMovie, {
    params: { api_key: '61a1e6b0683b97af3e2dd2d066889e95' },
  });
  return response.data.results;
};

export const searchMoviesByName = async searchQuery => {
  const response = await movieApi.get(`/${nameMovie}`, {
    params: {
      api_key: '61a1e6b0683b97af3e2dd2d066889e95',
      query: searchQuery,
    },
  });
  return response.data.results;
};

export const searchMovieById = async id => {
  const response = await movieApi.get(`/movie/${id}`, {
    params: {
      api_key: '61a1e6b0683b97af3e2dd2d066889e95',
    },
  });
  return response.data;
};

export const searchMovieByCast = async id => {
  const response = await movieApi.get(`/movie/${id}/credits`, {
    params: {
      api_key: '61a1e6b0683b97af3e2dd2d066889e95',
    },
  });
  return response.data;
};

export const searchMovieByReviews = async id => {
  const response = await movieApi.get(`/movie/${id}/reviews`, {
    params: {
      api_key: '61a1e6b0683b97af3e2dd2d066889e95',
    },
  });
  return response.data;
};