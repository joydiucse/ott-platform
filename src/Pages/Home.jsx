import React, { useEffect, useState } from 'react';
import { getErrorMessage, handleError } from '../utils/errorHandler';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroBanner from '../Components/sections/HeroBanner';
import ApiService from '../api/apiService';
import Data from '../Components/Data';
import CategoryRow from '../Components/sections/CategoryRow';
import RoundedCard from "@/Components/sections/Cards/RoundedCard.jsx";

export default function Home() {
  const [carouselData, setCarouselData] = useState([]);
  const [allOttPlatformsData, setAllOttPlatformsData] = useState([]);
  const [trendingVideosData, setTrendingVideosData] = useState([]);
  const [watchforFree, setWatchforFree] = useState([]);
  const [liveChannelData, setLiveChannelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch carousel data only
  const fetchCarouselData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ApiService.getHomepageCarousel(0, 10);
      setCarouselData(data.data || []);
    } catch (err) {
      console.error('❌ Carousel fetch error:', err);
      setError(err);
        throw handleError(err, 'fetchCarouselData');
    } finally {
      setLoading(false);
    }
  };

      // All OTT Platforms data only
  const fetchOttPlatformsData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ApiService.getOttPlatforms(0, 10);
      setAllOttPlatformsData(data.data || []);
    } catch (err) {
      console.error('❌ All OTT Platforms fetch error:', err);
      setError(err);
        throw handleError(err, 'allOttPlatformsData');
    } finally {
      setLoading(false);
    }
  };

    const fetchTrendingVideosData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ApiService.getTrendingVideos(0, 10);
      setTrendingVideosData(data.data || []);
    } catch (err) {
      console.error('❌ Trending Videos fetch error:', err);
      setError(err);
        throw handleError(err, 'trendingVideosData');
    } finally {
      setLoading(false);
    }
  };

  const fetchWatchForFreeData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ApiService.getWatchForFree(0, 10);
      setWatchforFree(data.data || []);
    } catch (err) {
      console.error('❌ Watch For Free fetch error:', err);
      setError(err);
        throw handleError(err, 'watchforFree');
    } finally {
      setLoading(false);
    }
  };




  const fetchLiveChannelsData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ApiService.getLiveChannels(0, 10);
        setLiveChannelData(data.data || []);
    } catch (err) {
      console.error('❌ Live Channel fetch error:', err);
      setError(err);
        throw handleError(err, 'liveChannelData');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCarouselData();
    fetchOttPlatformsData();
    fetchTrendingVideosData();
    fetchWatchForFreeData();
    fetchLiveChannelsData();
  }, []);

  const handleBannerClick = (item) => {
    console.log('HeroBanner item clicked:', item);
    // Handle banner item click - navigate to detail page or show modal
  };

  const handleRetry = () => {
    fetchCarouselData();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 animate-spin mx-auto mb-4 text-blue-500" />
          <p className="text-gray-600">Loading featured content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Failed to Load Content</h2>
          <p className="text-gray-600 mb-4">
            {getErrorMessage(error)}
          </p>
          <Button 
            onClick={handleRetry}
            className="flex items-center gap-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }



  return (
    <div className='space-y-6'>
      {/* Hero Banner Section with Props Drilling */}
        <HeroBanner 
          items={carouselData}
          onItemClick={handleBannerClick}
          autoPlay={true}
          autoPlayDelay={5000}
          loop={true}
          showControls={true}
          className="w-full"
        />
        <CategoryRow title="All OTT Platforms" items={allOttPlatformsData} />
         <CategoryRow title="Trending Videos" items={trendingVideosData} />
         <CategoryRow title="Watch For Free" items={watchforFree} />
        <RoundedCard title="Unlimited Entertainment" items={liveChannelData}/>
    </div>
  );
}