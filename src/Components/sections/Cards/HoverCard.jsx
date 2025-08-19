import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Play, Plus, Share2 } from "lucide-react";

export default function HoverCard({ items, hoveredItem, setHoveredItem, parentRect, isHoveringCard, setIsHoveringCard, isHoveringHoverCard, setIsHoveringHoverCard, handleImgError }) {
  const showHoverCard = isHoveringCard || isHoveringHoverCard;

  return (
    <>
      {showHoverCard && hoveredItem && parentRect &&
        createPortal(
          <div
            className="absolute z-50 rounded-2xl overflow-hidden shadow-2xl bg-[#1e1f20] border border-white/10
              transition-all duration-300 transform scale-105 opacity-100 pointer-events-auto"
            style={{
              top: parentRect.top - 20 + window.scrollY,
              left: parentRect.left + parentRect.width / 2 + window.scrollX,
              transform: "translateX(-50%)",
              width: "18rem",
              height: "22rem",
            }}
            onMouseEnter={() => setIsHoveringHoverCard(true)}
            onMouseLeave={() => setIsHoveringHoverCard(false)}
          >
            {/* Top poster */}
            <div className="h-1/2 relative overflow-hidden rounded-t-2xl">
              <img
              onError={handleImgError}
                src={hoveredItem.hoverPoster}
                alt={hoveredItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Bottom content */}
            <div className="h-1/2 p-4 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-3">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-110 transition">
                  <Play size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <Plus size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <Share2 size={20} />
                </button>
                <span className="ml-auto text-xs px-2 py-1 rounded-md bg-white/10 border border-white/15 text-white">
                  {hoveredItem.genre}
                </span>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1 text-white">
                  {hoveredItem.title}
                </h4>
                <p className="text-sm text-[#9ea4ae] line-clamp-4">
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