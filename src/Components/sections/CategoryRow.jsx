import React from "react";

export default function CategoryRow({ image, logo, tag, title, languages }) {
  return (
    <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg bg-black group">
      {/* Poster */}
      <img
        src="https://imageurl.com/takepoint.jpg"
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Top-left logo */}
      {logo && (
        <div className="absolute top-2 left-2">
          <img
            src="https://imageurl.com/lionsgate.png"
            alt="logo"
            className="h-6 md:h-7 object-contain"
          />
        </div>
      )}

      {/* Top-right tag */}
      {tag && (
        <div className="absolute top-2 right-2 bg-cyan-400 text-black text-xs font-semibold px-2 py-1 rounded-md shadow">
          "Exclusive"
        </div>
      )}

      {/* Bottom title & language */}
      <div className="absolute bottom-0 left-0 right-0 p-2 text-center bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <h3 className="text-white font-extrabold text-lg md:text-xl leading-tight">
          "TAKE POINT"
        </h3>
        <p className="text-gray-300 text-xs md:text-sm">"KOREAN | HINDI"</p>
      </div>
    </div>
  );
}
