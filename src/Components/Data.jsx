// Data.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryRow from "./sections/CategoryRow";

const Data = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://dailysun-cms-api.nexdecade.com/api/v1/get-all-ott-platforms"
        );

        console.log("API Response:", response.data);

        // Normalize API data to match Card props
        const formattedData = (response.data?.data || []).map(
          (item, index) => ({
            id: item.id || index,
            poster: item.cart_image_small || "https://placehold.co/300x450", // base card
            hoverPoster: item.cart_image_big || item.cart_image_small, // hover card
            logo:
              item.logo ||
              "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
            tag: item.tag || "Popular",
            title: item.name || item.title || "Untitled",
            genre: item.category || "Entertainment",
            description: item.description || "No description available.",
          })
        );

        setMovies(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div className="text-white px-20">Loading...</div>;
  if (error) return <div className="text-red-500 px-20">Error: {error}</div>;

  return (
    <div className="space-y-16 px-20">
      <CategoryRow title="All OTT Platforms" items={movies} />
    </div>
  );
};

export default Data;
