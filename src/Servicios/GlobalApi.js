import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = '2ec0d66f5bdf1dd12eefa0723f1479cf';
const tmdbBaseUrl = "https://api.themoviedb.org/3";

const movieByGenreBaseUrl = `${tmdbBaseUrl}/discover/movie`;
const trendingBaseUrl = `${tmdbBaseUrl}/trending/all/day`;

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

const getMovieByGenreId = (id) => axios.get(`${movieByGenreBaseUrl}?api_key=${api_key}&with_genres=${id}`);


const getMovieDetails = async (id, language = 'es-ES') => {
  try {
      const detailsResponse = await axios.get(`${tmdbBaseUrl}/movie/${id}?api_key=${api_key}&language=${language}`);
      const creditsResponse = await axios.get(`${tmdbBaseUrl}/movie/${id}/credits?api_key=${api_key}`);
      const videosResponse = await axios.get(`${tmdbBaseUrl}/movie/${id}/videos?api_key=${api_key}`);

      const movieDetails = detailsResponse.data;
      const movieCredits = creditsResponse.data;
      const movieVideos = videosResponse.data;

      return { movieDetails, movieCredits, movieVideos };
  } catch (error) {
      console.error('Error al obtener detalles de la película:', error);
      throw error;
  }
};

const getAdditionalMovieDetails = (id) => axios.get(`${tmdbBaseUrl}/movie/${id}/credits?api_key=${api_key}`);

const getLogoUrl = (logoPath, size = 'original', fileType = 'svg') => {
    return `https://image.tmdb.org/t/p/${size}/${logoPath}.${fileType}`;
};

const getTvSeriesImages = async (seriesId, includeImageLanguage = 'en', language = 'es-ES') => {
  try {
    const response = await axios.get(`${tmdbBaseUrl}/tv/${seriesId}/images`, {
      params: {
        include_image_language: includeImageLanguage,
        language,
        api_key,
      },
    });
    const { backdrops, logos, posters } = response.data;
    console.log('Backdrops:', backdrops);
    console.log('Logos:', logos);
    console.log('Posters:', posters);
    return response.data;
  } catch (error) {
    console.error('Error al obtener imágenes de la serie:', error);
    throw error;
  }
};

const api = {
  getTrendingVideos,
  getMovieByGenreId,
  getMovieDetails,
  getLogoUrl,
  getAdditionalMovieDetails,
  getTvSeriesImages
};

export default api;
