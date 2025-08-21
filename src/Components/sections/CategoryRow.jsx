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
      className="container relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2 className="px-4 mb-4 text-base font-bold text-black dark:text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl sm:mb-6 sm:px-6">
        {title}
      </h2>

      {!isBeginning && hovered && (
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute z-20 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full left-15 top-1/2 bg-black/50 hover:bg-black/70 sm:w-10 sm:h-10"
        >
          <ChevronLeft className="w-5 h-5 text-white sm:w-6 sm:h-6" />
        </button>
      )}

      {!isEnd && hovered && (
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute z-20 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full right-15 top-1/2 bg-black/50 hover:bg-black/70 sm:w-10 sm:h-10"
        >
          <ChevronRight className="w-5 h-5 text-white sm:w-6 sm:h-6" />
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
            0: { slidesPerView: 2, spaceBetween: 3 },
            360: { slidesPerView: 2, spaceBetween: 16 },
            480: { slidesPerView: 3, spaceBetween: 4 },
            640: { slidesPerView: 3, spaceBetween: 6 },
            768: { slidesPerView: 4, spaceBetween: 8 },
            1024: { slidesPerView: 5, spaceBetween: 12 },
            1280: { slidesPerView: 6, spaceBetween: 14 },
            1536: { slidesPerView: 7, spaceBetween: 16 },
          }}
          className="w-full"
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="relative w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48"
            >
              <Cards
                items={[item]}
                cardIndex={index}
                totalCards={items.length}
                slidesPerView={swiperRef.current?.params.slidesPerView || 5}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
