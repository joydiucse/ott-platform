import React from "react";
import Cards from "./Cards/Cards";


export default function CategoryRow({ title, items }) {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-12">
      {/* Row title */}
      <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6">
        {title}
      </h2>

      {/* Responsive cards grid */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-7
          gap-4 sm:gap-5 md:gap-6 lg:gap-7
        "
      >
        {items.map((item) => (
          <Cards key={item.id} items={[item]} />
        ))}
      </div>
    </section>
  );
}