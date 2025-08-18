import React from "react";
import { Play, Plus, Share2 } from "lucide-react";

export const HoverCard = ({ item }) => {
  return (
    <div className="absolute inset-0 w-[20rem] h-[25rem] -top-10 -left-8 rounded-2xl overflow-hidden shadow-2xl z-30 bg-[#1e1f20] border border-white/10 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
      {/* Top section with movie poster */}
      <div className="h-1/2">
        <img
          src={item.hoverPoster}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom section with movie details and action buttons */}
      <div className="h-1/2 p-4 flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          {/* Play button with tooltip */}
          <div className="relative group/button">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-110 transition">
              <Play size={20} />
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black/80 text-white rounded whitespace-nowrap opacity-0 group-hover/button:opacity-100 transition pointer-events-none">
              Play
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-black/80"></div>
            </div>
          </div>

          {/* Add to List button with tooltip */}
          <div className="relative group/button">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
              <Plus size={20} />
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black/80 text-white rounded whitespace-nowrap opacity-0 group-hover/button:opacity-100 transition pointer-events-none">
              Add to List
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-black/80"></div>
            </div>
          </div>

          {/* Share button with tooltip */}
          <div className="relative group/button">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
              <Share2 size={20} />
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black/80 text-white rounded whitespace-nowrap opacity-0 group-hover/button:opacity-100 transition pointer-events-none">
              Share
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-black/80"></div>
            </div>
          </div>

          {/* Genre tag */}
          <span className="ml-auto text-xs px-2 py-1 rounded-md bg-white/10 border border-white/15 text-white">
            {item.genre}
          </span>
        </div>

        {/* Movie title and description */}
        <h4 className="text-lg font-semibold mb-1 text-white">{item.title}</h4>
        <p className="text-sm text-[#9ea4ae] line-clamp-4">
          {item.description}
        </p>
      </div>
    </div>
  );
};