import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

const entertainmentItems = [
  { 
    id: 1, 
    img: "https://play-lh.googleusercontent.com/dxc6rqZHigOTItU0u3i4aWOKN9pdszX-JlZK1tRatCOyT3JJD1AOW7TZ-hzKyk1tkxI", 
    name: "Hoichoi" 
  },
  { 
    id: 2, 
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/SonyLIV_2020.png", 
    name: "Sony Liv" 
  },
  { 
    id: 3, 
    img: "https://play-lh.googleusercontent.com/QqDDzy3LMtCfpfRhAVA8JTadBCV5377oKoGopKJzl5trZxvfyPWAK4RwibfNZLOBqw", 
    name: "Lionsgate Play" 
  },
  { 
    id: 4, 
    img: "https://asset.bioscopelive.com/uploads/images/2025/07/28/thumbnails_36ec3a1cf1bd37190f70410115095152_goplay_deepto.png?w=640&q=75", 
    name: "Dipto Bangla" 
  },
  { 
    id: 5, 
    img: "https://yt3.googleusercontent.com/Gu3MR9d-5eHerF_oCxtBhzHrztQ1qLwzPkTRztlM8p5zUoKp77Wd5lyAd26WcfjZNAW7k4aML3A=s900-c-k-c0x00ffffff-no-rj", 
    name: "Chorki" 
  },
  { 
    id: 6, 
    img: "https://upload.wikimedia.org/wikipedia/en/3/37/Channel_i_Logo.png", 
    name: "Chennel i" 
  },
  { 
    id: 7, 
    img: "https://asset.bioscopelive.com/uploads/images/2025/07/28/thumbnails_f7c22f32f59b5ec41654c618f06621ec_goplay_klikk.png?w=640&q=75", 
    name: "Klikk" 
  },
  { 
    id: 8, 
    img: "https://asset.bioscopelive.com/uploads/images/2025/07/28/thumbnails_bb875d7c9999d8c3b816f089801b521f_goplay_epic_on.png?w=640&q=75", 
    name: "Epic On" 
  },
  { 
    id: 9, 
    img: "https://asset.bioscopelive.com/uploads/images/2025/07/29/thumbnails_e6fde5f23dbb80d40d9e94c1010b4cb8_goplay_docubay.jpg?w=640&q=75", 
    name: "Docu Bey" 
  },
  { 
    id: 10, 
    img: "https://florhamparklib.org/wp-content/uploads/2024/02/shemaroo.png", 
    name: "Shemaroo me" 
  },
];

export default function RoundedCard() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [hovered, setHovered] = useState(false); // new state for hover

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-6 py-8"
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
        {entertainmentItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:scale-100">
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
