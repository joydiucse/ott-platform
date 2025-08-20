import React from "react";
import { createPortal } from "react-dom";
import { Play, Plus, Share2 } from "lucide-react";

export default function HoverCard({
  hoveredItem,
  parentRect,
  isHoveringCard,
  isHoveringHoverCard,
  setIsHoveringHoverCard,
  handleImgError,
  cardIndex,
  totalCards,
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

  let left = parentRect.left + parentRect.width / 2 + scrollX;
  let transform = "-translate-x-1/2";

  // Special positioning for first and last cards
  if (cardIndex === 0) {
    // First card → show on right
    left = parentRect.right + scrollX; 
    transform = "translate-x-0";
  } else if (cardIndex === totalCards - 1) {
    // Last card → show on left
    left = parentRect.left + scrollX - hoverCardWidth; 
    transform = "translate-x-0";
  }

  return showHoverCard
    ? createPortal(
        <div
          className={`absolute z-50 rounded-xl overflow-hidden shadow-xl bg-[#121212] border border-white/10 transition-all duration-300 opacity-100 pointer-events-auto`}
          style={{
            top: parentRect.top - 20 + scrollY,
            left: left,
            width: hoverCardWidth,
            height: hoverCardHeight,
            transform: transform === "translate-x-0" ? "none" : "translateX(-50%)",
          }}
          onMouseEnter={() => setIsHoveringHoverCard(true)}
          onMouseLeave={() => setIsHoveringHoverCard(false)}
        >
          {/* Poster */}
          <div className="h-1/2 relative overflow-hidden">
            <img
              src={hoveredItem.cart_image_big}
              alt={hoveredItem.title}
              onError={handleImgError}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="h-1/2 p-4 flex flex-col justify-between">
            <div className="flex items-start mb-3">
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-110 transition-transform">
                  <Play size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] transition-colors">
                  <Plus size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] transition-colors">
                  <Share2 size={20} />
                </button>
              </div>

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

            <div>
              <h4 className="text-lg font-semibold mb-1 text-white">{hoveredItem.title}</h4>
              <p className="text-sm text-gray-400 leading-snug line-clamp-4">
                {hoveredItem.description}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
}