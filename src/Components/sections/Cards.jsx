import React from "react";
import { Play, Plus, Share2 } from "lucide-react";

// Movie data array - in a real app, this would likely come from an API
const items = [
  {
    id: 1,
    poster:
      "https://li-img-cdn-lb.lionsgateplay.com/mvp/TAKEPOINTY2018MEN/TAKEPOINTY2018MEN-lgi-landscape-hero-main-1920x1080-DMHEL.jpg?w=1080&q=75",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Lions-Gate-Logo.svg/323px-Lions-Gate-Logo.svg.png?20140903222658",
    tag: "Exclusive",
    title: "Take Point",
    hoverPoster:
      "https://li-img-cdn-lb.lionsgateplay.com/mvp/TAKEPOINTY2018MEN/TAKEPOINTY2018MEN-lgi-landscape-hero-main-1920x1080-DMHEL.jpg?w=1080&q=75",
    genre: "Historical",
    description:
      "Take Point (Korean: PMC: 더 벙; lit. PMC: The Bunker) is a 2018 South Korean action film written and directed by Kim Byung-woo, starring Ha Jung-woo and Lee ...",
  },
];

export default function Cards() {
  return (
    <div className="flex gap-3 px-4">
      {items.map((item) => (
        <div key={item.id} className="relative group">
          {/* Base card (visible when not hovering) */}
          <div className="w-48 md:w-56 aspect-[2/3] bg-black rounded-3xl overflow-hidden shadow-lg ring-1 ring-white/10 transition-all duration-300 ease-out group-hover:opacity-0">
            <img
              src={item.poster}
              alt={item.title}
              className="w-full h-full object-cover rounded-3xl"
            />

            {/* Studio logo in top-left corner */}
            <div className="absolute top-2 left-2">
              <img
                src={item.logo}
                alt="logo"
                className="h-6 md:h-7 object-contain bg-black/70 rounded px-1"
              />
            </div>

            {/* Exclusive tag in top-right corner */}
            <div className="absolute top-2 right-2">
              <span className="bg-cyan-400 text-black text-[11px] md:text-xs font-semibold px-2 py-1 rounded-md shadow">
                {item.tag}
              </span>
            </div>
          </div>

          {/* Expanded card (appears on hover) */}
          <div className="absolute inset-0 w-[20rem] h-[25rem] -top-10 -left-8 rounded-2xl overflow-hidden shadow-2xl z-30 bg-[#1e1f20] border border-white/10 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]">
            {/* Top section with movie poster */}
            <div className="h-1/2">
              <img
                src={item.hoverPoster}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom section with movie details and action buttons */}
            <div className="h-1/2 p-4 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                {/* Play button with tooltip */}
                <div className="relative group/button">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-110 transition">
                    <Play size={20} />
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black/80 text-white rounded whitespace-nowrap opacity-0 group-hover/button:opacity-100 transition pointer-events-none">
                    Play
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-black/80"></div>
                  </div>
                </div>

                {/* Add to List button with tooltip */}
                <div className="relative group/button">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                    <Plus size={20} />
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black/80 text-white rounded whitespace-nowrap opacity-0 group-hover/button:opacity-100 transition pointer-events-none">
                    Add to List
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-black/80"></div>
                  </div>
                </div>

                {/* Share button with tooltip */}
                <div className="relative group/button">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                    <Share2 size={20} />
                  </button>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black/80 text-white rounded whitespace-nowrap opacity-0 group-hover/button:opacity-100 transition pointer-events-none">
                    Share
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-black/80"></div>
                  </div>
                </div>

                {/* Genre tag */}
                <span className="ml-auto text-xs px-2 py-1 rounded-md bg-white/10 border border-white/15 text-white">
                  {item.genre}
                </span>
              </div>

              {/* Movie title and description */}
              <h4 className="text-lg font-semibold mb-1 text-white">{item.title}</h4>
              <p className="text-sm text-[#9ea4ae] line-clamp-4">
                {item.description}
              </p>
            </div>
          </div>
          {/* Title outside the card at the bottom */}
          <div className="mt-2 text-center">
            <h3 className="text-[#babfc3] text-lg font-extrabold leading-tight">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}