import React, { useState, useRef } from "react";
import HoverCard from "./HoverCard";

export default function Cards({ items }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [parentRect, setParentRect] = useState(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isHoveringHoverCard, setIsHoveringHoverCard] = useState(false);
  const cardRef = useRef(null);

  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/300x450";
  };

  return (
    <div className="flex relative w-full h-full gap-4">
      {items?.map((item,index) => {
        return (
          <div
            key={index}
            ref={cardRef}
            className="w-full h-full"
            onMouseEnter={() => {
              setHoveredItem(item);
              setParentRect(cardRef.current.getBoundingClientRect());
              setIsHoveringCard(true);
            }}
            onMouseLeave={() => setIsHoveringCard(false)}
          >
            {/* Base card */}
            <div
              className={`aspect-[2/3] bg-black rounded-sm overflow-hidden ring-1 ring-white/10 transition-all duration-300 ease-out ${
                isHoveringCard && hoveredItem?.id === item.id
                  ? "scale-110 shadow-2xl z-20 -translate-y-4"
                  : "shadow-lg"
              }`}
            >
              <img
                src={item.cart_image_small}
                alt={item.title}
                onError={handleImgError}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>

            {/* Title */}
            <div className="mt-2 text-center">
              <h3 className="text-black dark:text-[#babfc3] text-base sm:text-lg font-bold leading-tight">
                {item.title}
              </h3>
            </div>
          </div>
        );
      })}

      {/* Hover card */}
      <HoverCard
        handleImgError={handleImgError}
        hoveredItem={hoveredItem}
        parentRect={parentRect}
        isHoveringCard={isHoveringCard}
        isHoveringHoverCard={isHoveringHoverCard}
        setIsHoveringHoverCard={setIsHoveringHoverCard}
      />
    </div>
  );
}