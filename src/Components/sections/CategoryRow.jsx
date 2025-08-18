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
      className="relative w-full py-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Section Title */}
      <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 px-6">
        {title}
      </h2>

      {/* Left Arrow */}
      {!isBeginning && hovered && (
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
                     bg-black/50 hover:bg-black/70 transition 
                     w-10 h-10 flex items-center justify-center rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Right Arrow */}
      {!isEnd && hovered && (
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
                     bg-black/50 hover:bg-black/70 transition 
                     w-10 h-10 flex items-center justify-center rounded-full"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Swiper Container */}
      <div className="px-2 relative">
        <Swiper
          onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          slidesPerGroup={1}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 12 },
            480: { slidesPerView: 3, spaceBetween: 14 },
            768: { slidesPerView: 4, spaceBetween: 16 },
            1024: { slidesPerView: 5, spaceBetween: 16 },
            1280: { slidesPerView: 6, spaceBetween: 16 },
            1536: { slidesPerView: 7, spaceBetween: 10 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <Cards items={[item]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
