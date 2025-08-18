import React, { useRef, useState } from "react";
import { HoverCard } from "./HoverCard";

export default function Cards({ items }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [parentRect, setParentRect] = useState(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isHoveringHoverCard, setIsHoveringHoverCard] = useState(false);

  const showHoverCard = isHoveringCard || isHoveringHoverCard;

  return (
    <div className="flex gap-4 relative">
      {items.map((item) => {
        const cardRef = useRef(null);

        return (
          <div
            key={item.id}
            className="relative w-36 md:w-44"
            ref={cardRef}
            onMouseEnter={() => {
              setHoveredItem(item);
              setParentRect(cardRef.current.getBoundingClientRect());
              setIsHoveringCard(true);
            }}
            onMouseLeave={() => setIsHoveringCard(false)}
          >
            {/* Base card */}
            <div className="aspect-[2/3] bg-black rounded-3xl overflow-hidden shadow-lg ring-1 ring-white/10 transition-transform duration-300 ease-out hover:scale-110">
              <img
                src={item.poster}
                alt={item.title}
                className="w-full h-full object-cover rounded-3xl"
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

      {showHoverCard && hoveredItem && parentRect && (
        <HoverCard
          item={hoveredItem}
          parentRect={parentRect}
          setIsHoveringHoverCard={setIsHoveringHoverCard}
        />
      )}
    </div>
  );
}
