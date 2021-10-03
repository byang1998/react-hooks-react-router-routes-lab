import React from "react";
import { movies } from "../data";

function Movies() {
  const movieItems = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Runtime: {movie.time} min.</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      </div>
  ));
  // render the text movies page in h1
  // make a new div for each movie
  // div should have movies title, time and a ul with a list of its genres.

  return (
   <div>
    <h1>Movies Page</h1>
    {movieItems}
  </div>
  );
}

export default Movies;
