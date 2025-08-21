// src/components/sections/Top10.jsx
import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import HoverCard from "@/Components/sections/Cards/HoverCard.jsx";
import {image} from "@/utils/GlobalService.jsx";

export default function Top10({ item, serialNo }) {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [parentRect, setParentRect] = useState(null);
    const [isHoveringCard, setIsHoveringCard] = useState(false);
    const [isHoveringHoverCard, setIsHoveringHoverCard] = useState(false);
    const cardRef = useRef(null);

    const handleImgError = (e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/300x450";
    };

    // Special styling for the 10th item
    const isTenthItem = serialNo === 10;


    return (
        <div key={item?.id || serialNo} className="flex items-end justify-start relative h-full">
            {/* Number badge - precisely aligned with card bottom */}
            <div className="absolute bottom-12 left-[5%] md:left-[4%] xl:left-[2%] inset-y-0 translate-y-1 -translate-x-[30%] md:-translate-x-[40%] xl:-translate-x-[35%]">
                <div className="hidden xl:flex items-end inset-y-0 inset-x-0 h-full relative">
                    <div className="relative h-[60%] lg:h-[55%] w-auto">
                        <img alt={item?.title} loading="lazy" width="400" height="400" decoding="async" data-nimg="1" className="w-auto h-full object-contain pointer-events-none" src={image(`/serial/${serialNo}.svg`)}  onError={handleImgError} /></div>
                </div>
                <div className="xl:hidden flex items-end inset-y-0 inset-x-0 h-full relative">
                    <div className="relative h-[51%] w-auto">
                        <img loading="lazy" decoding="async" className="w-auto h-full object-contain pointer-events-none" src={image(`/serial/${serialNo}.svg`)} alt={item?.title} onError={handleImgError}/></div>
                </div>
            </div>

            {/* Card container with adjusted margin for the 10th item */}
            <div className={`relative z-10 w-32 sm:w-36 md:w-40 lg:w-44 xl:w-52 ${
                isTenthItem ? 'ml-14 md:ml-18' : 'ml-12 md:ml-16'
            }`}>
                <div ref={cardRef} className="w-full h-full">
                    {/* Wrap the card in Link */}
                    <Link to={`/description/${item?.id}`} state={{item}}>
                        <div
                            className={`relative aspect-[2/3] bg-black rounded-sm overflow-hidden ring-1 ring-white/10 transition-all duration-300 ease-out ${
                                isHoveringCard && hoveredItem?.id === item?.id
                                    ? "scale-110 shadow-2xl z-20 -translate-y-4"
                                    : "shadow-lg"
                            }`}
                            onMouseEnter={() => {
                                setHoveredItem(item);
                                setParentRect(cardRef.current.getBoundingClientRect());
                                setIsHoveringCard(true);
                            }}
                            onMouseLeave={() => setIsHoveringCard(false)}
                        >
                            <img
                                src={item?.cart_image_small}
                                alt={item?.title}
                                onError={handleImgError}
                                className="object-cover w-full h-full rounded-sm"
                            />
                        </div>

                        {/* Title with truncation to prevent breaking layout */}
                        <div className="mt-2 text-center h-10 flex items-center justify-center">
                            <h3 className="text-black dark:text-[#babfc3] text-sm font-bold leading-tight line-clamp-1 overflow-hidden text-ellipsis whitespace-nowrap px-1"
                                title={item?.title}>
                                {item?.title}
                            </h3>
                        </div>
                    </Link>
                </div>

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
        </div>
    );
}