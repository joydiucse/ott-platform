import React, { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Play, Plus, Share2 } from "lucide-react";

export default function DescriptionPage() {
  const { state } = useLocation();
  const { item } = state || {};
  const { id } = useParams();
  const navigate = useNavigate();

  // Ensure page loads from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
          No details available for this item (id: {id}).
        </p>
      </div>
    );
  }

  const category = item.category || "";
  const year = item.release_date
    ? new Date(item.release_date).getFullYear()
    : "";

  const getImageUrl = () => {
    return (
      item.carousel_image_big ||
      item.carousel_image_small ||
      item.cart_image_big ||
      item.cart_image_small ||
      "https://placehold.co/1920x1080"
    );
  };

  return (
    <div className="relative w-full min-h-screen text-white bg-black">
      {/* Top Back Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        className="absolute z-20 flex items-center gap-1 text-xs font-semibold text-black sm:text-sm md:text-base lg:text-lg top-4 sm:top-6 left-4 sm:left-6 hover:text-gray-800 dark:text-white dark:hover:text-gray-300"
      >
        <ArrowLeft size={16} className="sm:w-5 sm:h-5" /> Back
      </button>

{/* Main Poster */}
<div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] lg:h-[90vh] max-h-screen aspect-video">
  <img
    src={getImageUrl()}
    alt={item.title}
    className="object-cover w-full h-full"
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = "https://placehold.co/1920x1080";
    }}
  />

  {/* Bottom Overlay Content */}
  <div className="absolute bottom-0 left-0 w-full px-4 py-4 sm:px-6 md:px-8 lg:px-12 sm:py-6 md:py-8 bg-gradient-to-t from-black/90 to-transparent">
    <div className="container flex flex-col gap-6 mx-auto md:flex-row md:items-end md:justify-between">
            
            {/* Left Section */}
            <div className="max-w-full md:max-w-[65%] lg:max-w-3xl">
              <h1 className="mb-3 text-[clamp(1.5rem,4vw,3.5rem)] font-extrabold leading-tight">
                {item.title}
              </h1>

              {/* Buttons */}
              <div className="flex items-center gap-2 mb-3 sm:gap-3 md:gap-4">
                <button className="flex items-center gap-1 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 font-semibold text-black bg-white rounded-lg hover:scale-105 transition-transform text-xs sm:text-sm md:text-base">
                  <Play size={16} className="sm:w-5 sm:h-5" /> Play
                </button>
                <button className="flex items-center justify-center transition rounded-full w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>
                <button className="flex items-center justify-center transition rounded-full w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30">
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
                {item.description || "No description available."}
              </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-start text-left md:items-end md:text-right">
              {category && (
                <p className="mb-1 text-sm font-bold text-gray-100 sm:text-base md:text-lg">
                  {category}
                </p>
              )}
              {year && (
                <p className="text-sm font-semibold text-gray-300 sm:text-base md:text-lg">
                  {year}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
