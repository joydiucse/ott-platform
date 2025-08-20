import React from "react";
import CategoryRow from "./sections/CategoryRow";
import useFetchData from "../hooks/useFetchData"; // renamed hook
import { API_URL } from "../utils/Global";

const Data = () => {
  const { data: movies, loading: loading1, error: error1 } = useFetchData(`${API_URL}/v1/get-all-ott-platforms`);
  const { data: trending, loading: loading2, error: error2 } = useFetchData(`${API_URL}/v1/get-trending-videos`);
  const { data: freeToWatch, loading: loading3, error: error3 } = useFetchData(`${API_URL}/v1/get-watch-for-free`);

  if (loading1 || loading2 || loading3)
    return <div className="text-white px-20">Loading...</div>;
  if (error1 || error2 || error3)
    return (
      <div className="text-red-500 px-20">
        Error: {error1 || error2 || error3}
      </div>
    );

  return (
    <div className="space-y-16 px-20 max-sm:px-4">
      <CategoryRow title="All OTT Platforms" items={movies} />
      <CategoryRow title="Trending Videos" items={trending} />
      <CategoryRow title="Watch for Free" items={freeToWatch} />
    </div>
  );
};

export default Data;
