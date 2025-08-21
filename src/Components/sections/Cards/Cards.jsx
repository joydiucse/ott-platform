import React, { useState, useRef, useEffect } from "react";
import HoverCard from "./HoverCard";
import { Link } from "react-router-dom";

export default function Cards({ items, cardIndex, totalCards, slidesPerView }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [parentRect, setParentRect] = useState(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isHoveringHoverCard, setIsHoveringHoverCard] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const cardRef = useRef(null);

  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/300x450";
  };

  const handleMouseEnter = (item) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

    // Only set parentRect if not already hovering
    if (!isHoveringCard && !isHoveringHoverCard && cardRef.current) {
      setParentRect(cardRef.current.getBoundingClientRect());
    }
    setHoveredItem(item);

    // Delay for smooth response
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHoveringCard(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

    // Slightly longer delay to prevent premature disappearance
    hoverTimeoutRef.current = setTimeout(() => {
      if (!isHoveringHoverCard) {
        setIsHoveringCard(false);
        setHoveredItem(null);
        setParentRect(null);
      }
    }, 300); // Increased to 300ms for stability
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const item = items[0];

  return (
    <div className="relative w-full h-full">
      <Link to={`/description/${item.id}`} state={{ item }}>
        <div
          ref={cardRef}
          className={`relative aspect-[2/3] bg-black rounded-sm overflow-hidden ring-1 ring-white/10 transition-all duration-300 ease-in-out ${
            isHoveringCard || isHoveringHoverCard
              ? "scale-105 shadow-2xl z-20 -translate-y-2"
              : "shadow-lg"
          }`}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={item.cart_image_small}
            alt={item.title}
            onError={handleImgError}
            className="object-cover w-full h-full transition-opacity duration-300 ease-in-out rounded-sm hover:opacity-95"
          />
        </div>

        <div className="mt-2 text-center">
          <h3 className="text-black dark:text-[#babfc3] text-base sm:text-lg font-bold leading-tight transition-colors duration-300">
            {item.title}
          </h3>
        </div>
      </Link>

      <HoverCard
        hoveredItem={hoveredItem}
        parentRect={parentRect}
        isHoveringCard={isHoveringCard}
        isHoveringHoverCard={isHoveringHoverCard}
        setIsHoveringHoverCard={setIsHoveringHoverCard}
        cardIndex={cardIndex}
        totalCards={totalCards}
        slidesPerView={slidesPerView}
        handleImgError={handleImgError}
      />
    </div>
  );
}