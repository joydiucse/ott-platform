import React from "react";
import { HoverCard } from "./HoverCard"; // Adjust path if needed

export default function Cards({ items }) {
  return (
    <div className="flex gap-4 px-4">
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="relative group">
            {/* Base card */}
            <div className="w-36 md:w-44 aspect-[2/3] bg-black rounded-3xl overflow-hidden shadow-lg ring-1 ring-white/10 transition-all duration-300 ease-out group-hover:opacity-0">
              <img
                src={item.poster}
                alt={item.title}
                className="w-full h-full object-cover rounded-3xl"
              />

              {/* Studio logo */}
              <div className="absolute top-2 left-2">
                <img
                  src={item.logo}
                  alt="logo"
                  className="h-6 md:h-7 object-contain bg-black/70 rounded px-1"
                />
              </div>

              {/* Tag */}
              <div className="absolute top-2 right-2">
                <span className="bg-cyan-400 text-black text-[11px] md:text-xs font-semibold px-2 py-1 rounded-md shadow">
                  {item.tag}
                </span>
              </div>
            </div>

            {/* Hover card */}
            <HoverCard item={item} />

            {/* Title below card */}
            <div className="mt-2 text-center">
              <h3 className="text-[#babfc3] text-lg font-extrabold leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">No movies available</p>
      )}
    </div>
  );
}
