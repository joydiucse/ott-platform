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

  // Default: position to the right (like leftmost card)
  let left = parentRect.right + scrollX + 8;
  let transform = "translateX(0)";

  // Rightmost card or near the end → position to the left
  if ((cardIndex + 1) % slidesPerView === 0 || cardIndex === totalCards - 1) {
    left = parentRect.left + scrollX - hoverCardWidth - 8;
    transform = "translateX(0)";
  }
  // For middle cards, prefer right side unless closer to the right edge
  else if (cardIndex % slidesPerView >= Math.floor(slidesPerView / 2)) {
    left = parentRect.left + scrollX - hoverCardWidth - 8;
    transform = "translateX(0)";
  }

  return showHoverCard
    ? createPortal(
        <div
          className="absolute z-50 rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-[#121212] border border-black/10 dark:border-white/10 transition-all duration-300 ease-in-out"
          style={{
            top: parentRect.top - 30 + scrollY,
            left: left,
            width: hoverCardWidth,
            height: hoverCardHeight,
            transform: transform,
            opacity: showHoverCard ? 1 : 0,
            padding: "8px",
            transition: "opacity 300ms ease-in-out, transform 300ms ease-in-out, left 300ms ease-in-out, top 300ms ease-in-out",
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
                className="object-cover w-full h-full transition-opacity duration-300 ease-in-out hover:opacity-90"
              />
              <div className="absolute inset-0 transition-opacity duration-300 ease-in-out bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-4 h-1/2">
              <div className="flex items-start mb-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center w-10 h-10 text-black bg-white rounded-full shadow-md transition-all duration-200 ease-in-out hover:scale-110 hover:bg-gray-100 dark:bg-[#2a2a2a] dark:text-white dark:hover:bg-[#3a3a3a]"
                  >
                    <Play size={20} />
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black dark:bg-[#2a2a2a] dark:text-white transition-all duration-200 ease-in-out hover:scale-110 hover:bg-gray-300 dark:hover:bg-[#3a3a3a]"
                  >
                    <Plus size={20} />
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black dark:bg-[#2a2a2a] dark:text-white transition-all duration-200 ease-in-out hover:scale-110 hover:bg-gray-300 dark:hover:bg-[#3a3a3a]"
                  >
                    <Share2 size={20} />
                  </button>
                </div>

                {/* Genres */}
                <div className="flex flex-col items-end gap-2 pr-1 ml-auto">
                  {genres.map((genre, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-md bg-gray-100 text-black font-medium dark:bg-[#2b2f30] dark:text-white transition-colors duration-200 ease-in-out"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-1 text-lg font-semibold text-black transition-colors duration-200 ease-in-out dark:text-white">
                  {hoveredItem.title}
                </h4>
                <p className="text-sm leading-snug text-gray-600 transition-colors duration-200 ease-in-out dark:text-gray-400 line-clamp-4">
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