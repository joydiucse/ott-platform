import React, { useState } from "react";
import { Play, Plus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "@/styles/carousel.css"; // Ensure you have the carousel styles imported

// Demo data
const SLIDES = [
  {
    id: "fight-or-flight",
    title: "Fight or Flight",
    genres: ["Action", "Comedy"],
    duration: "1h 42m",
    year: "2025",
    rating: "18+",
    tag: "Exclusive",
    bg: "https://images.unsplash.com/photo-1531168556467-80aace0d0142?q=80&w=1600&auto=format&fit=crop",
    poster:
      "https://images.unsplash.com/photo-1526676037777-05a232554f38?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "kbc",
    title: "Kaun Banega Crorepati",
    genres: ["Reality"],
    duration: "—",
    year: "2025",
    rating: "A",
    tag: "New Season",
    bg: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1600&auto=format&fit=crop",
    poster:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "mayasabha",
    title: "Mayasabha: Rise of the Titans",
    genres: ["Drama", "Thriller"],
    duration: "2h 05m",
    year: "2025",
    rating: "16+",
    tag: "New Show",
    bg: "https://images.unsplash.com/photo-1526481280698-8fcc13fd6ae0?q=80&w=1600&auto=format&fit=crop",
    poster:
      "https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "last-stand",
    title: "The Last Stand",
    genres: ["Action", "Sci‑Fi"],
    duration: "1h 58m",
    year: "2026",
    rating: "13+",
    tag: "Exclusive",
    bg: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop",
    poster:
      "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=900&auto=format&fit=crop",
  },
];

function Chip({ children }) {
  return (
    <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs md:text-sm">
      {children}
    </Badge>
  );
}

export default function HeroBanner({ slides = SLIDES }) {
  const [active, setActive] = useState(0);
  const activeSlide = slides[active];

  return (
    <div className="relative w-full h-[72vh] min-h-[520px] max-h-[760px] bg-[#0a0d0e]">
      {/* Background */}
      <div
        key={activeSlide.id}
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          backgroundImage: `url(${activeSlide.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0d0e] via-[#0a0d0e]/30 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0a0d0e] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0a0d0e] to-transparent" />

      <div className="relative z-20 h-full">
        <Carousel
          opts={{ loop: true, align: "center" }}
          className="h-full"
          onSelect={(api) => {
            setActive(api.selectedScrollSnap());
          }}
        >
          <CarouselContent className="h-full">
            {slides.map((s) => (
              <CarouselItem key={s.id} className="h-full flex items-end px-5 sm:px-8 md:px-12 lg:px-16">
                <div className="max-w-[900px] pb-10 md:pb-14">
                  <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                    {s.title}
                  </h2>

                  <div className="mt-6 flex items-center gap-3">
                    <Button
                      size="lg"
                      className="bg-white text-[#0a0d0e] hover:bg-white/90 rounded-full px-5"
                    >
                      <Play size={18} fill="currentColor" className="-ml-1" />
                      Play Now
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Plus size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Info size={20} />
                    </Button>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2 md:gap-3 text-white/80">
                    {s.genres.map((g) => (
                      <Chip key={g}>{g}</Chip>
                    ))}
                    <span className="text-white/50">•</span>
                    <span>{s.duration}</span>
                    <span className="text-white/50">•</span>
                    <span>{s.year}</span>
                    <span className="text-white/50">•</span>
                    <Badge
                      variant="secondary"
                      className="px-2 py-0.5 rounded-md text-xs md:text-sm"
                    >
                      {s.rating}
                    </Badge>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-6" />
          <CarouselNext className="right-2 md:right-6" />
        </Carousel>
      </div>
    </div>
  );
}
