import CategoryRow from "./sections/CategoryRow";


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

const Data = () => {
  return (
    <div className="space-y-16">
      <CategoryRow title="All Time Hits" items={movieData} />
      <CategoryRow title="Latest Releases" items={movieData.slice(0, 7)} />
      <CategoryRow title="Trending Now" items={movieData.slice(5, 12)} />
    </div>
  );
};

export default Data;