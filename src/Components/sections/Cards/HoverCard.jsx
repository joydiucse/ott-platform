import React from "react";
import { createPortal } from "react-dom";
import { Play, Plus, Share2 } from "lucide-react";

export default function HoverCard({
  items,
  hoveredItem,
  setHoveredItem,
  parentRect,
  isHoveringCard,
  setIsHoveringCard,
  isHoveringHoverCard,
  setIsHoveringHoverCard,
  handleImgError,
}) {
  const showHoverCard = isHoveringCard || isHoveringHoverCard;

  // Normalize genres
  const genres = hoveredItem?.genre
    ? Array.isArray(hoveredItem.genre)
      ? hoveredItem.genre
      : hoveredItem.genre.split(",").map((g) => g.trim())
    : [];

  return (
    <>
      {showHoverCard &&
        hoveredItem &&
        parentRect &&
        createPortal(
          <div
            className="absolute z-50 rounded-xl overflow-hidden shadow-xl bg-[#121212] border border-white/10
              transition-all duration-300 opacity-100 pointer-events-auto"
            style={{
              top: parentRect.top - 20 + window.scrollY,
              left: parentRect.left + parentRect.width / 2 + window.scrollX,
              transform: "translateX(-50%)",
              width: "20rem",
              height: "24rem",
            }}
            onMouseEnter={() => setIsHoveringHoverCard(true)}
            onMouseLeave={() => setIsHoveringHoverCard(false)}
          >
            {/* Poster */}
            <div className="h-1/2 relative overflow-hidden">
              <img
                onError={handleImgError}
                src={hoveredItem.hoverPoster}
                alt={hoveredItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="h-1/2 p-4 flex flex-col justify-between">
              {/* Buttons + Genres */}
              <div className="flex items-start mb-3">
                {/* Left side buttons */}
                <div className="flex items-center gap-3">
                  {/* Play button */}
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-110 transition">
                    <Play size={20} />
                  </button>

                  {/* Plus */}
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] transition">
                    <Plus size={20} />
                  </button>

                  {/* Share */}
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] transition">
                    <Share2 size={20} />
                  </button>
                </div>

                {/* Genres aligned fully right, stacked */}
                <div className="ml-auto flex flex-col gap-2 pr-1 items-end">
                  {genres.map((genre, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-md bg-[#2b2f30] text-white font-medium"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title & description */}
              <div>
                <h4 className="text-lg font-semibold mb-1 text-white">
                  {hoveredItem.title}
                </h4>
                <p className="text-sm text-gray-400 leading-snug line-clamp-4">
                  {hoveredItem.description}
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
