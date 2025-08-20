import api from './axiosConfig';
import { handleError } from '../utils/errorHandler';
import { API_URL, API_VERSION } from '../utils/GlobalService';



// Specific API services with your desired structure
const ApiService = {
  // Trending Videos
  getTrendingVideos: async (offset = 0, limit = 10) => {
    try {
      return await api.get(`${API_URL}/${API_VERSION}/get-trending-videos?offset=${offset}&limit=${limit}`);
    } catch (error) {
      throw handleError(error, 'getTrendingVideos');
    }
  },

  // Watch for Free
  getWatchForFree: async (offset = 0, limit = 10) => {
    try {
      return await api.get(`${API_URL}/${API_VERSION}/get-watch-for-free?offset=${offset}&limit=${limit}`);
    } catch (error) {
      throw handleError(error, 'getWatchForFree');
    }
  },

  // OTT Platforms
  getOttPlatforms: async (offset = 0, limit = 10) => {
    try {
      return await api.get(`${API_URL}/${API_VERSION}/get-all-ott-platforms?offset=${offset}&limit=${limit}`);
    } catch (error) {
      throw handleError(error, 'getOttPlatforms');
    }
  },

  // Top Movies
  getTopMovies: async (offset = 0, limit = 10) => {
    try {
      return await api.get(`${API_URL}/${API_VERSION}/get-top-ten-movies?offset=${offset}&limit=${limit}`);
    } catch (error) {
      throw handleError(error, 'getTopMovies');
    }
  },

  // Top Series
  getTopSeries: async (offset = 0, limit = 10) => {
    try {
      return await api.get(`${API_URL}/${API_VERSION}/get-top-ten-series?offset=${offset}&limit=${limit}`);
    } catch (error) {
      throw handleError(error, 'getTopSeries');
    }
  },

  // Live Channels
  getLiveChannels: async (offset = 0, limit = 10) => {
    try {
      return await api.get(`${API_URL}/${API_VERSION}/get-live-channels?offset=${offset}&limit=${limit}`);
    } catch (error) {
      throw handleError(error, 'getLiveChannels');
    }
  },

  // Homepage Carousel
  getHomepageCarousel: async (offset = 0, limit = 10) => {
        return await api.get(`${API_URL}/${API_VERSION}/get-homepage-carousel?offset=${offset}&limit=${limit}`);

  },

  // Generic method for other endpoints
  getWithParams: async (endpoint, params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString();
      return await api.get(`${API_URL}/${API_VERSION}/${endpoint}?${queryString}`);
    } catch (error) {
      throw handleError(error, `getWithParams-${endpoint}`);
    }
  }
};

export default ApiService;