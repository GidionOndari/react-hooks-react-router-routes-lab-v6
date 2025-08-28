import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <li>
      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
    </li>
  );
}

export default MovieCard;
