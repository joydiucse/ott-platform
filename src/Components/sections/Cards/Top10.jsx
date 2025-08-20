// src/components/sections/Top10.jsx
import React from "react";

import Cards from './Cards';

export default function Top10({ items }) {
  return (
    <div className="flex flex-row flex-wrap gap-6 px-4">
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <div key={item.id || index} className="flex items-end">
            {/* Number */}
            <div className="flex items-end h-[288px] md:h-[288px]">
              <span className="block text-[230px] font-extrabold text-[#d8dadc] leading-none drop-shadow-lg">
                {index + 1}
              </span>
            </div>

            {/* Card sticky to number */}
            <div className="-ml-6">
              <Cards items={[item]} className="gap-0 px-0" />
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">No top items available</p>
      )}
    </div>
  );
}
