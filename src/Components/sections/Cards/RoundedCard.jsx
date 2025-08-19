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
      className="relative w-full max-w-7xl mx-auto px-6 py-8"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Dynamic Title */}
      <h2 className="text-white text-2xl font-semibold mb-6">{title}</h2>

      {/* Left Arrow */}
      {!isBeginning && hovered && (
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute left-0 top-[55%] -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-opacity duration-300"
        >
          <ChevronLeft className="w-7 h-7 text-white" />
        </button>
      )}

      {/* Right Arrow */}
      {!isEnd && hovered && (
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="absolute right-0 top-[55%] -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80 transition-opacity duration-300"
        >
          <ChevronRight className="w-7 h-7 text-white" />
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
        spaceBetween={6}
        slidesPerView={8}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 6 },
          640: { slidesPerView: 5, spaceBetween: 6 },
          1024: { slidesPerView: 8, spaceBetween: 6 },
        }}
      >
        {items?.map((item,index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:scale-100">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <p className="mt-2 text-sm text-gray-300">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
