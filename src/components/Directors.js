import React from "react";
import { directors } from "../data";

function Directors() {
  const directorItems = directors.map((director) => (
    <div key={director.name}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  //render the text directors page in h1 and make a new div for each director.
  // the div should contain the directors name and a ul with a list of their movies
  return (
  <div>
    <h1>Directors Page</h1>
    {directorItems}
  </div>
  
  );
}

export default Directors;
