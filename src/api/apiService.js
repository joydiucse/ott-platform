import api from "./axiosConfig";
import { API_URL, API_VERSION } from "../utils/GlobalService";

// Specific API services with your desired structure
const ApiService = {
  // Trending Videos
  getTrendingVideos: async (offset = 0, limit = 10) => {
    return await api.get(
      `${API_URL}/${API_VERSION}/get-trending-videos?offset=${offset}&limit=${limit}`
    );
  },

  // Watch for Free
  getWatchForFree: async (offset = 0, limit = 10) => {
    return await api.get(
      `${API_URL}/${API_VERSION}/get-watch-for-free?offset=${offset}&limit=${limit}`
    );
  },

  // OTT Platforms
  getOttPlatforms: async (offset = 0, limit = 10) => {
    return await api.get(
      `${API_URL}/${API_VERSION}/get-all-ott-platforms?offset=${offset}&limit=${limit}`
    );
  },

  // Top Movies
  getTopMovies: async (offset = 0, limit = 10) => {
    return await api.get(
      `${API_URL}/${API_VERSION}/get-top-ten-movies?offset=${offset}&limit=${limit}`
    );
  },

  // Top Series
  getTopSeries: async (offset = 0, limit = 10) => {
    return await api.get(
      `${API_URL}/${API_VERSION}/get-top-ten-series?offset=${offset}&limit=${limit}`
    );
  },

  // Live Channels
  getLiveChannels: async (offset = 0, limit = 10) => {
    return await api.get(
      `${API_URL}/${API_VERSION}/get-live-channels?offset=${offset}&limit=${limit}`
    );
  },

  // Homepage Carousel
  getHomepageCarousel: async (offset = 0, limit = 10) => {
    return await api.get(
      `${API_URL}/${API_VERSION}/get-homepage-carousel?offset=${offset}&limit=${limit}`
    );
  },
};

export default ApiService;
