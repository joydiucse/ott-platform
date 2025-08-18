import React, { useRef, useState } from "react";
import HoverCard from "./HoverCard";


export default function Cards({ items }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [parentRect, setParentRect] = useState(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isHoveringHoverCard, setIsHoveringHoverCard] = useState(false);

  return (
    <div className="flex gap-4 relative">
      {items.map((item) => {
        const cardRef = useRef(null);

        return (
          <div
            key={item.id}
            className="relative w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44"
            ref={cardRef}
            onMouseEnter={() => {
              setHoveredItem(item);
              setParentRect(cardRef.current.getBoundingClientRect());
              setIsHoveringCard(true);
            }}
            onMouseLeave={() => setIsHoveringCard(false)}
          >
            
            {/* Base card */}
            <div
              className={`aspect-[2/3] bg-black rounded-md overflow-hidden ring-1 ring-white/10  // ⬅️ Changed from rounded-3xl to rounded-md
                transition-all duration-300 ease-out
                ${
                  isHoveringCard && hoveredItem?.id === item.id
                    ? "scale-110 shadow-2xl z-20 -translate-y-4"
                    : "shadow-lg"
                }`}
            >
              <img
                src={item.poster}
                alt={item.title}
                className="w-full h-full object-cover rounded-md" // ⬅️ Updated img rounding to match
              />
              <div className="absolute top-2 left-2">
                <img
                  src={item.logo}
                  alt="logo"
                  className="h-6 md:h-7 object-contain bg-black/70 rounded px-1"
                />
              </div>
              <div className="absolute top-2 right-2">
                <span className="bg-cyan-400 text-black text-[11px] md:text-xs font-semibold px-2 py-1 rounded-md shadow">
                  {item.tag}
                </span>
              </div>
            </div>

            {/* Title */}
            <div className="mt-2 text-center">
              <h3 className="text-[#babfc3] text-lg font-extrabold leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        );
      })}

      <HoverCard
        items={items}
        hoveredItem={hoveredItem}
        setHoveredItem={setHoveredItem}
        parentRect={parentRect}
        isHoveringCard={isHoveringCard}
        setIsHoveringCard={setIsHoveringCard}
        isHoveringHoverCard={isHoveringHoverCard}
        setIsHoveringHoverCard={setIsHoveringHoverCard}
      />
    </div>
  );
}