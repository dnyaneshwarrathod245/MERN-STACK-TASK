import "./MovieRow.css";

const movies = [
  {
    name: "Stranger Things",
    image:
      "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
  },
  {
    name: "Wednesday",
    image:
      "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
  },
  {
    name: "Money Heist",
    image:
      "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  },
  {
    name: "Squid Game",
    image:
      "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  },
  {
    name: "Dark",
    image:
      "https://image.tmdb.org/t/p/w500/5Lo5HFWNUt0fXn7xN3w0j5Qk7U.jpg",
  },
  {
    name: "The Witcher",
    image:
      "https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
  },
];

export default function MovieRow() {
  return (
    <div className="movie-section">
      <h2>Trending Now</h2>

      <div className="movie-row">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.image} alt={movie.name} />
            <h3>{movie.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}