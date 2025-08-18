import React from "react";
import { HoverCard } from "./HoverCard";
// same hover component

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

export default function WideCards() {
  return (
    <div className="flex gap-3 px-4">
      {items.map((item) => (
        <div key={item.id} className="relative group">
          {/* Base card (slightly less wide) */}
          <div className="w-60 md:w-68 lg:w-72 h-40 bg-black rounded-3xl overflow-hidden shadow-lg ring-1 ring-white/10 transition-all duration-300 ease-out group-hover:opacity-0">
            <img
              src={item.poster}
              alt={item.title}
              className="w-full h-full object-cover rounded-3xl"
            />

            {/* Studio logo top-left */}
            <div className="absolute top-2 left-2">
              <img
                src={item.logo}
                alt="logo"
                className="h-6 md:h-7 object-contain bg-black/70 rounded px-1"
              />
            </div>

            {/* Exclusive tag top-right */}
            <div className="absolute top-2 right-2">
              <span className="bg-cyan-400 text-black text-[11px] md:text-xs font-semibold px-2 py-1 rounded-md shadow">
                {item.tag}
              </span>
            </div>
          </div>

          {/* Hover card (same as before) */}
          <HoverCard item={item} />
        </div>
      ))}
    </div>
  );
}
