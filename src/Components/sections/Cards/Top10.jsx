import React from "react";
import Cards from "./Cards";

const top10Items = [
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
  // add more top 10 items here
];

export default function Top10() {
  return (
    <div className="flex flex-col gap-6 px-4">
      {top10Items.map((item, index) => (
        <div key={item.id} className="flex items-end">
          {/* Number */}
          <div className="flex items-end h-[288px] md:h-[288px]">
            <span className="block text-[230px] font-extrabold text-[#d8dadc] leading-none drop-shadow-lg">
              {index + 1}
            </span>
          </div>

          {/* Card sticky to the number */}
          <div className="-ml-6">
            <Cards items={[item]} className="gap-0 px-0" />
          </div>
        </div>
      ))}
    </div>
  );
}
