// src/components/sections/CategoryTop10.jsx
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import Top10 from "@/Components/sections/Cards/Top10.jsx";

export default function CategoryTop10({ title, items }) {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [hovered, setHovered] = useState(false);

    // Only show the first 10 items
    const top10Items = items?.slice(0, 10) || [];

    return (
        <section
            className="container relative py-6"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Section Title */}
            <h2 className="px-4 mb-4 text-base font-bold text-black dark:text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl sm:mb-6 sm:px-6">
                {title}
            </h2>

            {/* Left Arrow */}
            {!isBeginning && hovered && (
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute z-20 flex items-center justify-center w-8 h-8 transition -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/50 hover:bg-black/70 sm:w-10 sm:h-10"
                >
                    <ChevronLeft className="w-5 h-5 text-white sm:w-6 sm:h-6" />
                </button>
            )}

            {/* Right Arrow */}
            {!isEnd && hovered && (
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute z-20 flex items-center justify-center w-8 h-8 transition -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/50 hover:bg-black/70 sm:w-10 sm:h-10"
                >
                    <ChevronRight className="w-5 h-5 text-white sm:w-6 sm:h-6" />
                </button>
            )}

            <div className="px-4 md:px-6">
                <Swiper
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    slidesPerGroup={1}
                    breakpoints={{
                        0:   { slidesPerView: 2, spaceBetween: 16 },
                        480: { slidesPerView: 2, spaceBetween: 16 },
                        640: { slidesPerView: 2, spaceBetween: 16 },
                        768: { slidesPerView: 3, spaceBetween: 16 },
                        1024:{ slidesPerView: 3, spaceBetween: 16 },
                        1280:{ slidesPerView: 3, spaceBetween: 16 },
                        1536:{ slidesPerView: 4, spaceBetween: 16 },
                    }}
                    className="w-full"
                >
                    {top10Items.map((item, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            <Top10 item={item} serialNo={index + 1}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}