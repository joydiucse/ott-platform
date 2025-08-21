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

    // Capture parentRect before any transformation
    if (cardRef.current) {
      setParentRect(cardRef.current.getBoundingClientRect());
    }
    setHoveredItem(item);

    // Delay hover activation
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHoveringCard(true);
    }, 1000); // Reduced to 1 second for better responsiveness
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

    // Delay hiding to allow transition to HoverCard
    hoverTimeoutRef.current = setTimeout(() => {
      if (!isHoveringHoverCard) {
        setIsHoveringCard(false);
        setHoveredItem(null);
      }
    }, 200); // Short delay to prevent flicker
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
          className={`relative aspect-[2/3] bg-black rounded-sm overflow-hidden ring-1 ring-white/10 transition-all duration-300 ease-out ${
            isHoveringCard || isHoveringHoverCard ? "scale-110 shadow-2xl z-20 -translate-y-4" : "shadow-lg"
          }`}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={item.cart_image_small}
            alt={item.title}
            onError={handleImgError}
            className="object-cover w-full h-full rounded-sm"
          />
        </div>

        <div className="mt-2 text-center">
          <h3 className="text-black dark:text-[#babfc3] text-base sm:text-lg font-bold leading-tight">
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