import React from "react";
import { Play, Plus, Share2 } from "lucide-react";

export default function Cards() {
  const items = [
    {
      id: 1,
      poster:
        "https://li-img-cdn-lb.lionsgateplay.com/mvp/TAKEPOINTY2018MEN/TAKEPOINTY2018MEN-lgi-landscape-hero-main-1920x1080-DMHEL.jpg?w=1080&q=75",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Lions-Gate-Logo.svg/323px-Lions-Gate-Logo.svg.png?20140903222658",
      tag: "Exclusive",
      title: "Take Point",
      language: "KOREAN | HINDI",
      hoverPoster: "https://li-img-cdn-lb.lionsgateplay.com/mvp/TAKEPOINTY2018MEN/TAKEPOINTY2018MEN-lgi-landscape-hero-main-1920x1080-DMHEL.jpg?w=1080&q=75",
      genre: "Historical",
      description:
        "Mehmed' series will tell the story of the famous Ottoman conqueror, Sultan...",
    },
  ];

  return (
    <div className="flex gap-3 px-4">
      {items.map((item) => (
        <div key={item.id} className="relative group w-48 md:w-56 aspect-[2/3]">
          {/* --- Normal card (background card, hidden on hover) --- */}
          <div
            className="
              w-full h-full bg-black rounded-3xl overflow-hidden shadow-lg ring-1 ring-white/10
              transition-all duration-300 ease-out
              group-hover:opacity-0
            "
          >
            <img
              src={item.poster}
              alt={item.title}
              className="w-full h-full object-cover rounded-3xl"
            />

            {/* logo */}
            <div className="absolute top-2 left-2">
              <img
                src={item.logo}
                alt="logo"
                className="h-6 md:h-7 object-contain bg-black/70 rounded px-1"
              />
            </div>

            {/* tag */}
            <div className="absolute top-2 right-2">
              <span className="bg-cyan-400 text-black text-[11px] md:text-xs font-semibold px-2 py-1 rounded-md shadow">
                {item.tag}
              </span>
            </div>

            {/* title/lang */}
            <div className="absolute bottom-0 left-0 right-0 p-2 text-center bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-b-3xl">
              <h3 className="text-white font-extrabold text-lg md:text-xl leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm">
                {item.language}
              </p>
            </div>
          </div>

          {/* --- Hover card (fully replaces old one) --- */}
          <div
            className="
              absolute inset-0
              w-[20rem] h-[25rem]  /* bigger than base */
              -top-10 -left-8
              rounded-2xl overflow-hidden shadow-2xl z-30
              bg-[#1e1f20] border border-white/10
              opacity-0 scale-90
              group-hover:opacity-100 group-hover:scale-100
              transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
            "
          >
            {/* top image */}
            <div className="h-1/2">
              <img
                src={item.hoverPoster}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* bottom panel */}
            <div className="h-1/2 p-4 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-110 transition">
                  <Play size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <Plus size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <Share2 size={20} />
                </button>

                <span className="ml-auto text-xs px-2 py-1 rounded-md bg-white/10 border border-white/15">
                  {item.genre}
                </span>
              </div>

              <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-gray-300 line-clamp-4">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
