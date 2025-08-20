import React from "react";
import CategoryRow from "./sections/CategoryRow";
import Demo from "./Demo";
import RoundedCard from "./sections/Cards/RoundedCard";
import Home from "../Pages/Home";
import useFetchData from './../hooks/useFetchData';
import { API_URL } from "../utils/GlobalService";



// Hero Banner Data

const heroItems = [
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


// Sample movie data
const movieData = [
  {
    id: 1,
    poster: "https://m.media-amazon.com/images/I/81xvxLJG1aL._AC_SL1500_.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
    tag: "Exclusive",
    title: "Extraction 2",
    hoverPoster: "https://m.media-amazon.com/images/I/81xvxLJG1aL._AC_SL1500_.jpg",
    genre: "Action",
    description: "Tyler Rake returns for another high-stakes rescue mission."
  },
  {
    id: 2,
    poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Warner_Bros_logo.svg",
    tag: "Popular",
    title: "Inception",
    hoverPoster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
    genre: "Sci-Fi",
    description: "A thief who steals corporate secrets through dream-sharing tech."
  },
  {
    id: 3,
    poster: "https://m.media-amazon.com/images/I/81AIq2kU9-L._AC_SY679_.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Marvel_Studios_logo.png",
    tag: "Hot",
    title: "Avengers: Endgame",
    hoverPoster: "https://m.media-amazon.com/images/I/81AIq2kU9-L._AC_SY679_.jpg",
    genre: "Superhero",
    description: "The Avengers take their final stand against Thanos."
  },
  {
    id: 4,
    poster: "https://m.media-amazon.com/images/I/81rM0EJ0LPL._AC_SY679_.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Paramount_Pictures_logo.svg",
    tag: "Classic",
    title: "Titanic",
    hoverPoster: "https://m.media-amazon.com/images/I/81rM0EJ0LPL._AC_SY679_.jpg",
    genre: "Romance",
    description: "The epic romance aboard the ill-fated RMS Titanic."
  },
  {
    id: 5,
    poster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Columbia_Pictures_logo.svg",
    tag: "Award Winning",
    title: "The Social Network",
    hoverPoster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
    genre: "Drama",
    description: "The story behind Facebook’s creation and rise."
  },
  {
    id: 6,
    poster: "https://m.media-amazon.com/images/I/91qvpkXkD-L._AC_SY679_.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/20th_Century_Fox_logo.svg",
    tag: "Trending",
    title: "Avatar",
    hoverPoster: "https://m.media-amazon.com/images/I/91qvpkXkD-L._AC_SY679_.jpg",
    genre: "Adventure",
    description: "A human soldier explores Pandora, a lush alien world."
  },
  {
    id: 7,
    poster: "https://m.media-amazon.com/images/I/81+poJfswNL._AC_SY679_.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Sony_Pictures_logo.svg",
    tag: "New Release",
    title: "Spider-Man: No Way Home",
    hoverPoster: "https://m.media-amazon.com/images/I/81+poJfswNL._AC_SY679_.jpg",
    genre: "Superhero",
    description: "Peter Parker faces villains from across the multiverse."
  },
  {
    id: 8,
    poster: "https://m.media-amazon.com/images/I/81GqtgAA3aL._AC_SY679_.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Universal_Pictures_logo.svg",
    tag: "Comedy",
    title: "Minions: Rise of Gru",
    hoverPoster: "https://m.media-amazon.com/images/I/81GqtgAA3aL._AC_SY679_.jpg",
    genre: "Animation",
    description: "Gru and his Minions return in a hilarious adventure."
  },
  {
    id: 9,
    poster: "https://m.media-amazon.com/images/I/71q0NL2Z1zL._AC_SY679_.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Walt_Disney_Pictures_logo.svg",
    tag: "Family",
    title: "Frozen II",
    hoverPoster: "https://m.media-amazon.com/images/I/71q0NL2Z1zL._AC_SY679_.jpg",
    genre: "Fantasy",
    description: "Elsa and Anna go beyond Arendelle in search of truth."
  },
  {
    id: 10,
    poster: "https://m.media-amazon.com/images/I/81b9c86QneL._AC_SY679_.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Warner_Bros_Discovery_logo.svg",
    tag: "Top Rated",
    title: "The Dark Knight",
    hoverPoster: "https://m.media-amazon.com/images/I/81b9c86QneL._AC_SY679_.jpg",
    genre: "Action",
    description: "Batman faces off against the chaotic Joker in Gotham."
  },
  {
    id: 11,
    poster: "https://m.media-amazon.com/images/I/91cr8eYtP-L._AC_SY679_.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Lionsgate_2021_logo.svg",
    tag: "Exclusive",
    title: "John Wick 4",
    hoverPoster: "https://m.media-amazon.com/images/I/91cr8eYtP-L._AC_SY679_.jpg",
    genre: "Action",
    description: "John Wick takes on the High Table in his most dangerous fight."
  },
  {
    id: 12,
    poster: "https://m.media-amazon.com/images/I/81k1b6hJkAL._AC_SY679_.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Netflix_k_logo.svg",
    tag: "Hit",
    title: "Stranger Things",
    hoverPoster: "https://m.media-amazon.com/images/I/81k1b6hJkAL._AC_SY679_.jpg",
    genre: "Sci-Fi",
    description: "A supernatural mystery unfolds in the town of Hawkins."
  }
];


/* Unlimited Entertainment */

const entertainmentItems = [
  { 
    id: 1, 
    img: "https://asset.bioscopelive.com/uploads/images/2025/07/28/thumbnails_502594be9d8af4f5782a28fcbf5b2fa1_goplay_hoichoi.png?w=640&q=75", 
    name: "Hoichoi" 
  },
  { 
    
    id: 2, 
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/SonyLIV_2020.png", 
    name: "Sony Liv" 
  },
  { id: 3, 
    img: "https://asset.bioscopelive.com/uploads/images/2025/07/28/thumbnails_ed36dcf4b9bc1b310d07a271c3fef216_goplay_lgp.png?w=640&q=75", 
    name: "Lionsgate Play" },
  { 
    id: 4, 
    img: "https://asset.bioscopelive.com/uploads/images/2025/07/28/thumbnails_36ec3a1cf1bd37190f70410115095152_goplay_deepto.png?w=640&q=75", 
    name: "Dipto Bangla" 

  },
  { 
    id: 5, 
    img: "https://asset.bioscopelive.com/uploads/images/2025/07/28/thumbnails_a9e81e370d9919296b3b1773a293e8d9_goplay_chorki.png?w=640&q=75", 
    name: "Chorki" 

  },
  { 
    id: 6, 
    img: "https://asset.bioscopelive.com/uploads/images/2025/07/28/thumbnails_58e28fae622646e66e0a109c34b6bc5f_goplay_iscreen.png?w=640&q=75", 
    name: "Chennel i" 
    
  },
  { 
    id: 7, 
    img: "https://asset.bioscopelive.com/uploads/images/2025/07/28/thumbnails_f7c22f32f59b5ec41654c618f06621ec_goplay_klikk.png?w=640&q=75", 
    name: "Klikk" 
    
  },
  { 
    id: 8, 
    img: "https://asset.bioscopelive.com/uploads/images/2025/07/28/thumbnails_bb875d7c9999d8c3b816f089801b521f_goplay_epic_on.png?w=640&q=75", 
    name: "Epic On" 
    
  },
  { 
    id: 9, 
    img: "https://asset.bioscopelive.com/uploads/images/2025/07/29/thumbnails_e6fde5f23dbb80d40d9e94c1010b4cb8_goplay_docubay.jpg?w=640&q=75", 
    name: "Docu Bey" 
    
  },
  { 
    id: 10, 
    img: "https://asset.bioscopelive.com/uploads/images/2025/07/28/thumbnails_9c0e9fec9ceae1068394c2ba4737172e_goplay_shemarome.png?w=640&q=75", 
    name: "Shemaroo me" 
    
  },
];



const Data = () => {
  const { data: movies, loading: loading1, error: error1 } = useFetchData(`${API_URL}/v1/get-all-ott-platforms`);
  const { data: trending, loading: loading2, error: error2 } = useFetchData(`${API_URL}/v1/get-trending-videos`);
  const { data: freeToWatch, loading: loading3, error: error3 } = useFetchData(`${API_URL}/v1/get-watch-for-free`);

  if (loading1 || loading2 || loading3)
    return <div className="text-white px-20">Loading...</div>;
  if (error1 || error2 || error3)
    return (
      <div className="text-red-500 px-20">
        Error: {error1 || error2 || error3}
      </div>
    );

  return (
    <div className="space-y-16 px-20">

      
      <div className="-mx-20">
        <Home/>
      </div>
      {/* API Data */}
      <CategoryRow title="All OTT Platforms" items={movies} />
      <CategoryRow title="Trending Videos" items={trending} />
      <CategoryRow title="Watch for Free" items={freeToWatch} />
      <div className="-mx-20">
      <RoundedCard title="Unlimited Entertainment" items={entertainmentItems} />
      </div>
    </div>
  );
};

export default Data;
