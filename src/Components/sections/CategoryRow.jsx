import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import Cards from "./Cards/Cards";

export default function CategoryRow({ title, items }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Section Title */}
      <h2 className="text-black dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6 px-4 sm:px-6">
        {title}
      </h2>

      {/* Left Arrow */}
      {!isBeginning && hovered && (
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
                     bg-black/50 hover:bg-black/70 transition 
                     w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
      )}

      {/* Right Arrow */}
      {!isEnd && hovered && (
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
                     bg-black/50 hover:bg-black/70 transition 
                     w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
      )}

      <div className="px-0 md:px-6">
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
            0:   { slidesPerView: 2, spaceBetween: 3 },  
            360: { slidesPerView: 2, spaceBetween: 16 },  
            480: { slidesPerView: 3, spaceBetween: 4 },  
            640: { slidesPerView: 3, spaceBetween: 6 },
            768: { slidesPerView: 4, spaceBetween: 8 },
            1024:{ slidesPerView: 5, spaceBetween: 12 },
            1280:{ slidesPerView: 6, spaceBetween: 14 },
            1536:{ slidesPerView: 7, spaceBetween: 16 },
          }}
          className="w-full"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="relative w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48">
              <Cards items={[item]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}