import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Play, Plus, Info } from "lucide-react";
import { useRef } from "react";
import { formatDuration } from "../../utils/dataHelpers";

export default function HeroBanner({ items, onItemClick, autoPlay = true, autoPlayDelay = 4000, loop = true, showControls = true, className = "" }) {
  const swiperRef = useRef(null);

  // Helper function to extract year from release date
  const getYearFromDate = (dateString) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).getFullYear().toString();
    } catch {
      return '';
    }
  };

  // Helper function to get the best available image
  const getImageUrl = (item) => {
    return item.carousel_image_big || item.carousel_image_small || item.cart_image_big || item.cart_image_small || '';
  };

  return (
    <div className={`w-full px-0 ${className}`}>
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        autoplay={autoPlay ? { delay: autoPlayDelay, disableOnInteraction: false } : false}
        loop={loop}
        centeredSlides
        slidesPerView={"auto"}
        effect={"coverflow"}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 2,
          slideShadows: false,
        }}
        className="mySwiper"
      >
        {items?.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="!w-[85%] sm:!w-[75%] md:!w-[65%] lg:!w-[55%] transition-all duration-500 cursor-pointer"
            onClick={() => {
              if (!swiperRef.current) return;
              const current = swiperRef.current.realIndex;

              if (index === current) {
                if (onItemClick) {
                  onItemClick(item);
                }
              } else if (index === (current + 1) % items.length) {
                swiperRef.current.slideNext();
              } else if (index === (current - 1 + items.length) % items.length) {
                swiperRef.current.slidePrev();
              } else {
                swiperRef.current.slideToLoop(index);
              }
            }}
          >
            <div className="relative group rounded-2xl overflow-hidden shadow-xl h-[480px] sm:h-[480px] md:h-[480px] lg:h-[500px] transition-all duration-500">
              <img
                src={getImageUrl(item)}
                alt={item.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=800&auto=format&fit=crop&q=60';
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent sm:p-6">
                
                {/* Desktop layout */}
                <div className="items-end justify-between hidden w-full text-white md:flex">
                  {/* Left side */}
                  <div className="flex flex-col gap-4 max-w-[60%]">
                    <h2 className="text-4xl font-bold">{item.title}</h2>
                    <div className="flex items-center gap-3">
                      <button 
                        className="flex items-center gap-2 px-6 py-2 font-semibold text-black transition bg-white rounded-3xl hover:bg-gray-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onItemClick) onItemClick(item);
                        }}
                      >
                        <Play className="w-5 h-5" /> Play Now
                      </button>
                      <button className="p-2 text-white transition border rounded-full hover:bg-gray-700">
                        <Plus className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-white transition border rounded-full hover:bg-gray-700">
                        <Info className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="flex flex-col items-end gap-2 text-sm text-right text-gray-300">
                    <div className="flex items-center gap-2">
                      {item.category?.split(",").map((g, i) => (
                        <span key={i} className="px-2 py-1 text-white underline rounded underline-offset-4">
                          {g.trim()}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-white">{formatDuration(item.duration)}</span>
                      <span className="text-white">{getYearFromDate(item.release_date)}</span>
                      <span className="px-2 py-1 text-xs text-white border rounded">{item.age_restrictions}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="flex flex-col items-center text-center text-white md:hidden">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <div className="flex flex-wrap justify-center gap-2 mt-2 text-xs">
                    {item.category?.split(",").map((g, i) => (
                      <span key={i} className="px-2 py-1 text-white underline rounded underline-offset-4">
                        {g.trim()}
                      </span>
                    ))}
                    <span className="px-2 py-1 text-white underline rounded underline-offset-4">
                      {getYearFromDate(item.release_date)}
                    </span>
                    <span className="px-2 py-1 text-white border rounded">{item.age_restrictions}</span>
                  </div>
                  <button 
                    className="flex items-center justify-center h-10 gap-2 mt-3 font-semibold text-black transition bg-white w-36 rounded-3xl hover:bg-gray-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onItemClick) onItemClick(item);
                    }}
                  >
                    <Play className="w-4 h-4" /> Play Now
                  </button>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}