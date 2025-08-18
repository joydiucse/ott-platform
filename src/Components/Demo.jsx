import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import Cards from "./sections/Cards/Cards";


export default function RoundedCard({ title, items }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [hovered, setHovered] = useState(false); // new state for hover

  return (
    <div
      className=""
      onMouseEnter={() => setHovered(true)} // show arrows on hover
      onMouseLeave={() => setHovered(false)} // hide arrows on leave
    >
      <h2 className="text-white text-2xl font-semibold mb-6">
        Unlimited Entertainment
      </h2>

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
{items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-36 md:h-36    ">
                <Cards items={[item]} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
