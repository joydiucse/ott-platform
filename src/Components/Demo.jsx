import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define async function to fetch data
    const fetchData = async () => {
      try {
        // Make GET request using async/await
        const response = await axios.get(
          "https://dailysun-cms-api.nexdecade.com/api/v1/get-all-ott-platforms"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        if (error.response) {
          // Server responded with a status other than 2xx
          console.log("Response error:", error.response);
        } else if (error.request) {
          // No response was received
          console.log("Request error:", error.request);
        } else {
          // Something went wrong setting up the request
          console.log("Error:", error.message);
        }
      }
    };

    // Call the async function
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;