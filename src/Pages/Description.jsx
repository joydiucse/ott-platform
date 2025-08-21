// src/pages/DescriptionPage.jsx
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Description() {
  const { state } = useLocation();
  const { item } = state || {}; // item is passed via Link
  const { id } = useParams(); // fallback, if needed
  const navigate = useNavigate();

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 dark:text-gray-300">
          No details available for this item (id: {id}).
        </p>
      </div>
    );
  }

  const genres = item.genre
    ? Array.isArray(item.genre)
      ? item.genre
      : item.genre.split(",").map((g) => g.trim())
    : [];

  return (
    <div className="container">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
      >
        <ArrowLeft size={20} /> Back
      </button>

      {/* Layout */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Poster */}
        <div className="col-span-1">
          <img
            src={item.cart_image_big || item.cart_image_small}
            alt={item.title}
            className="object-cover w-full rounded-lg shadow-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/400x600";
            }}
          />
        </div>

        {/* Details */}
        <div className="flex flex-col col-span-2 gap-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {item.title}
          </h1>

          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {genres.map((genre, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-md bg-gray-200 text-gray-800 dark:bg-[#2b2f30] dark:text-white"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {item.description || "No description available."}
          </p>

          {/* Extra info (if available in API) */}
          {item.release_date && (
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Release Date:</strong> {item.release_date}
            </p>
          )}
          {item.language && (
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Language:</strong> {item.language}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
