// Base Configuration
export const API_URL = import.meta.env.VITE_API_URL || "https://dailysun-cms-api.nexdecade.com/api";
export const API_VERSION = import.meta.env.VITE_API_VERSION || "v1";


export const API_TIMEOUT = 15000; // 15 seconds

// API Endpoints
export const API_ENDPOINTS = {
  TRENDING_VIDEOS: '/v1/get-trending-videos',
  WATCH_FOR_FREE: '/v1/get-watch-for-free',
  OTT_PLATFORMS: '/v1/get-all-ott-platforms',
  TOP_MOVIES: '/v1/get-top-ten-movies',
  TOP_SERIES: '/v1/get-top-ten-series',
  LIVE_CHANNELS: '/v1/get-live-channels',
  HOMEPAGE_CAROUSEL: '/v1/get-homepage-carousel',
};

// Default Axios Config
export const DEFAULT_AXIOS_CONFIG = {
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};