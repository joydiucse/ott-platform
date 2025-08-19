import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);

        const formatted = (res.data?.data || []).map((item, index) => ({
          id: item.id || index,
          poster: item.cart_image_small || "https://placehold.co/300x450",
          hoverPoster: item.cart_image_big || item.cart_image_small,
          logo: item.logo || "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
          tag: item.tag || "Popular",
          title: item.name || item.title || "Untitled",
          genre: item.category || "Entertainment",
          description: item.description || "No description available.",
        }));

        setData(formatted);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);

        if (err.response) {
          // Server responded with a status other than 2xx
          console.error("Response error:", err.response);
        } else if (err.request) {
          // No response was received
          console.error("Request error:", err.request);
        } else {
          // Something went wrong setting up the request
          console.error("Error:", err.message);
        }
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
