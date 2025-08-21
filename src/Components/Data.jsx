import React from "react";
import CategoryRow from "./sections/CategoryRow";
import Demo from "./Demo";
import RoundedCard from "./sections/Cards/RoundedCard";
import Home from "../Pages/Home";
import useFetchData from './../hooks/useFetchData';
import { API_URL } from "../utils/GlobalService";


const Data = () => {
  const { data: movies, loading: loading1, error: error1 } = useFetchData(`${API_URL}/v1/get-all-ott-platforms`);
  const { data: trending, loading: loading2, error: error2 } = useFetchData(`${API_URL}/v1/get-trending-videos`);
  const { data: freeToWatch, loading: loading3, error: error3 } = useFetchData(`${API_URL}/v1/get-watch-for-free`);
  const { data: toptenmovies, loading: loading4, error: error4 } = useFetchData(`${API_URL}/v1/get-top-ten-movies`);
  const { data: toptenseries, loading: loading5, error: error5 } = useFetchData(`${API_URL}/v1/get-top-ten-series`);

  if (loading1 || loading2 || loading3 || loading4 || loading5)
    return <div className="px-20 text-white">Loading...</div>;
  if (error1 || error2 || error3)
    return (
      <div className="px-20 text-red-500">
        Error: {error1 || error2 || error3 || error4 || error5}
      </div>
    );

  return (
    <div className="container">
      {/* API Data */}
      <CategoryRow title="All OTT Platforms" items={movies} />
      <CategoryRow title="Trending Videos" items={trending} />
      <CategoryRow title="Watch for Free" items={freeToWatch} />

    </div>
  );
};

export default Data;