import React from "react";
import { createPortal } from "react-dom";
import { Play, Plus, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function HoverCard({
  hoveredItem,
  parentRect,
  isHoveringCard,
  isHoveringHoverCard,
  setIsHoveringHoverCard,
  handleImgError,
  cardIndex,
  totalCards,
  slidesPerView,
}) {
  if (!hoveredItem || !parentRect) return null;

  const showHoverCard = isHoveringCard || isHoveringHoverCard;

  const genres = hoveredItem.genre
    ? Array.isArray(hoveredItem.genre)
      ? hoveredItem.genre
      : hoveredItem.genre.split(",").map((g) => g.trim())
    : [];

  const hoverCardWidth = 320; // 20rem
  const hoverCardHeight = 384; // 24rem
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  // Default: center
  let left = parentRect.left + parentRect.width / 2 + scrollX;
  let transform = "translateX(-50%)";

  // Leftmost visible card → show right
  if (cardIndex % slidesPerView === 0) {
    left = parentRect.right + scrollX;
    transform = "translateX(0)";
  }
  // Rightmost visible card → show left
  else if ((cardIndex + 1) % slidesPerView === 0 || cardIndex === totalCards - 1) {
    left = parentRect.left + scrollX - hoverCardWidth;
    transform = "translateX(0)";
  }

  return showHoverCard
    ? createPortal(
        <div
          className="absolute z-50 rounded-xl overflow-hidden shadow-xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 transition-all duration-300"
          style={{
            top: parentRect.top - 20 + scrollY,
            left: left,
            width: hoverCardWidth,
            height: hoverCardHeight,
            transform: transform,
            padding: "10px", // Added padding to expand hover area
          }}
          onMouseEnter={() => setIsHoveringHoverCard(true)}
          onMouseLeave={() => setIsHoveringHoverCard(false)}
        >
          <Link
            to={`/description/${hoveredItem.id}`}
            state={{ item: hoveredItem }}
            className="block w-full h-full pointer-events-auto"
          >
            {/* Poster */}
            <div className="relative overflow-hidden h-1/2">
              <img
                src={hoveredItem.cart_image_big}
                alt={hoveredItem.title}
                onError={handleImgError}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-4 h-1/2">
              <div className="flex items-start mb-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center w-10 h-10 text-black transition-transform bg-white rounded-full shadow-md hover:scale-110"
                  >
                    <Play size={20} />
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black hover:bg-gray-300 dark:bg-[#2a2a2a] dark:text-white dark:hover:bg-[#3a3a3a] transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black hover:bg-gray-300 dark:bg-[#2a2a2a] dark:text-white dark:hover:bg-[#3a3a3a] transition-colors"
                  >
                    <Share2 size={20} />
                  </button>
                </div>

                {/* Genres */}
                <div className="flex flex-col items-end gap-2 pr-1 ml-auto">
                  {genres.map((genre, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-md bg-gray-100 text-black font-medium dark:bg-[#2b2f30] dark:text-white"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-1 text-lg font-semibold text-black dark:text-white">
                  {hoveredItem.title}
                </h4>
                <p className="text-sm leading-snug text-gray-600 dark:text-gray-400 line-clamp-4">
                  {hoveredItem.description}
                </p>
              </div>
            </div>
          </Link>
        </div>,
        document.body
      )
    : null;
}