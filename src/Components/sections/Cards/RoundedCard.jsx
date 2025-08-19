import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

export default function RoundedCard({ title, items }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Dynamic Title */}
      <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
        {title}
      </h2>

      {/* Left Arrow */}
      {!isBeginning && hovered && (
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute left-0 top-[55%] -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-opacity duration-300"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </button>
      )}

      {/* Right Arrow */}
      {!isEnd && hovered && (
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="absolute right-0 top-[55%] -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-opacity duration-300"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </button>
      )}

      {/* Swiper */}
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        spaceBetween={10}
        slidesPerView={8}
        breakpoints={{
          0: { slidesPerView: 2.8, spaceBetween: 14 },   // very small phones
          320: { slidesPerView: 3.2, spaceBetween: 14 }, // phones
          480: { slidesPerView: 4.2, spaceBetween: 14 }, // big phones
          640: { slidesPerView: 5.2, spaceBetween: 16 }, // tablets (sm)
          768: { slidesPerView: 6, spaceBetween: 16 },   // md
          1024: { slidesPerView: 7, spaceBetween: 18 },  // lg
          1280: { slidesPerView: 8, spaceBetween: 20 },  // xl
          1536: { slidesPerView: 8, spaceBetween: 20 },  // 2xl monitors
        }}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
                           lg:w-32 lg:h-32 xl:w-36 xl:h-36
                           min-w-[80px] min-h-[80px] 
                           rounded-full overflow-hidden 
                           border-2 border-gray-700 shadow-md 
                           transition-transform duration-300 ease-in-out 
                           hover:scale-105"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-300 text-center font-medium truncate w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36">
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
