import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../data";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Info</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
