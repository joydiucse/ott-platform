import React from 'react';
import Cards from './sections/Cards/Cards';
import WideCards from './sections/Cards/WideCards';
import Top10 from './sections/Cards/Top10';

const movieData = [
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
  {
    id: 2,
    poster:
      "https://example.com/movie2-poster.jpg",
    logo: "https://example.com/studio-logo.png",
    tag: "New Release",
    title: "Movie Two",
    hoverPoster:
      "https://example.com/movie2-hover.jpg",
    genre: "Action",
    description:
      "An action-packed thriller about a rogue agent on a mission to save the world.",
  },
];


const Data = () => {
    return (
        <div>
    <div >
      <h1 className="text-white text-2xl mb-4">Basic Cards</h1>
      <Cards items={movieData} />
    </div>
    <div >
      <h1 className="text-white text-2xl mb-4">Wide Cards</h1>
      
      <WideCards items={movieData} />
    </div>
        <div >
      <h1 className="text-white text-2xl mb-4">Top 10</h1>
      
      <Top10 items={movieData} />
    </div>
    
    
        </div>
    );
};

export default Data;