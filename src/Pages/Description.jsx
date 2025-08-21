// src/pages/DescriptionPage.jsx
import React, { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Play, Plus, Share2 } from "lucide-react";

export default function DescriptionPage() {
  const { state } = useLocation();
  const { item } = state || {};
  const { id } = useParams();
  const navigate = useNavigate();

  // 👇 Ensure page loads from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!item) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 dark:text-gray-300">
          No details available for this item (id: {id}).
        </p>
      </div>
    );
  }

  const category = item.category || "";
  const year = item.release_date
    ? new Date(item.release_date).getFullYear()
    : "";

  return (
    <div className="relative w-full min-h-screen text-white bg-black">
      {/* Top Back Button */}
      <button
        onClick={(e) => {
          e.preventDefault(); // 👈 prevent default
          navigate(-1);
        }}
        className="absolute z-20 flex items-center gap-2 font-bold text-black top-6 left-6 hover:text-gray-800 dark:text-white dark:hover:text-gray-300"
      >
        <ArrowLeft size={20} /> Back
      </button>

      {/* Main Poster */}
      <div className="relative w-full h-[90vh]">
        <img
          src={item.cart_image_big}
          alt={item.title}
          className="object-cover w-full h-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/1920x1080";
          }}
        />

        {/* Bottom Overlay Content */}
        <div className="absolute bottom-0 left-0 flex items-end justify-between w-full px-10 py-8 bg-gradient-to-t from-black/70 to-transparent">
          {/* Left Section (Title + Buttons + Description) */}
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-extrabold">{item.title}</h1>

            {/* Buttons */}
            <div className="flex items-center gap-4 mb-4">
              <button className="flex items-center gap-2 px-6 py-3 font-semibold text-black transition-transform bg-white rounded-lg hover:scale-105">
                <Play size={20} /> Play
              </button>
              <button className="flex items-center justify-center w-12 h-12 transition rounded-full bg-white/20 hover:bg-white/30">
                <Plus size={22} />
              </button>
              <button className="flex items-center justify-center w-12 h-12 transition rounded-full bg-white/20 hover:bg-white/30">
                <Share2 size={22} />
              </button>
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed text-gray-200">
              {item.description || "No description available."}
            </p>
          </div>

          {/* Right Section (Category + Year) */}
          <div className="flex flex-col items-end text-right">
            {category && (
              <p className="mb-1 text-lg font-bold text-gray-100">{category}</p>
            )}
            {year && (
              <p className="text-lg font-semibold text-gray-300">{year}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
