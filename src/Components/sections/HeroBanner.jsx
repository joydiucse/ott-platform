import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Play, Plus, Info } from "lucide-react";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Tandoob",
    year: "2025",
    genre: "Crime · Drama",
    duration: "2h 10m",
    age: "18+",
    thumbnail:
      "https://m.media-amazon.com/images/M/MV5BZmMwZTk1MDctMjM1My00YTA5LTg0YmYtZWE5Y2Q4N2JhZGQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 2,
    title: "Kacher Manush Dure Thuiya",
    year: "2024",
    genre: "Romance · Drama",
    duration: "2h 24m",
    age: "16+",
    thumbnail:
      "https://image-chorki.gotipath.com/uploads/images/2024/07/16/posters_41d6c5b36f0cda1d6f9701b9f482cf5a_goplay_kacher_manus_dure_thuya_poster_landscape_horizontal_with_mnemonic_1200x675.jpg",
  },
  {
    id: 3,
    title: "Toofan",
    year: "2024",
    genre: "Thriller",
    duration: "2h 23m",
    age: "16+",
    thumbnail: "https://i.ytimg.com/vi/aBYkA7J8D6M/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Borbaad",
    year: "2025",
    genre: "Action",
    duration: "2h 19m",
    age: "18+",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57B9h8rlHgteZ9JFohzVUESUg9J8zct_px2oandYGGvLxI7AiPcAN983yWJba11rtZtfWK01i4BIiKxgH5J6OVQ8rmNu5edlWch6RDA",
  },
];

export default function HeroBanner() {
  const swiperRef = useRef(null);

  return (
    <div className="w-full px-1.5">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
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
        {items.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="!w-[85%] md:!w-[65%] lg:!w-[55%] transition-all duration-500 cursor-pointer"
            onClick={() => {
              if (!swiperRef.current) return;
              const current = swiperRef.current.realIndex;

              if (index === current) {
                console.log("Play clicked:", item.title);
              } else if (index === (current + 1) % items.length) {
                swiperRef.current.slideNext();
              } else if (index === (current - 1 + items.length) % items.length) {
                swiperRef.current.slidePrev();
              } else {
                swiperRef.current.slideToLoop(index);
              }
            }}
          >
            <div
              className="
                relative group rounded-2xl overflow-hidden shadow-xl 
                h-[480px] 
                transition-all duration-500
                swiper-slide-active:h-[500px]
                swiper-slide-prev:h-[480px] 
                swiper-slide-next:h-[480px]
              "
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay split */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
                <div className="p-6 text-white w-full flex justify-between items-end">
                  {/* LEFT SIDE */}
                  <div className="flex flex-col gap-4 max-w-[60%]">
                    <h2 className="text-4xl font-bold">{item.title}</h2>

                    {/* Play + Plus + Info একসাথে */}
                    <div className="flex items-center gap-3">
                      <button className="bg-white text-black font-semibold px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition">
                        <Play className="w-5 h-5" /> Play Now
                      </button>
                      <button className="bg-gray-800/70 text-white p-2 rounded-full hover:bg-gray-700 transition">
                        <Plus className="w-5 h-5" />
                      </button>
                      <button className="bg-gray-800/70 text-white p-2 rounded-full hover:bg-gray-700 transition">
                        <Info className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex flex-col items-end gap-2 text-right">
                    <div className="flex items-center gap-2 text-sm">
                      {item.genre.split("·").map((g, i) => (
                        <span
                          key={i}
                          className="bg-gray-900/80 px-2 py-1 rounded"
                        >
                          {g.trim()}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-gray-300 text-sm">
                      <span>{item.duration}</span>
                      <span>{item.year}</span>
                      <span className="bg-gray-800 px-2 py-1 rounded text-xs">
                        {item.age}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
