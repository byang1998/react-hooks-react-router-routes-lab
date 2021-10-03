import React from "react";
import { actors } from "../data";

function Actors() {
  const actorItems = actors.map((actor) => (
    <div key={actor.name}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  //render the text actors page in a h1 and make a new div for each actor. 
  //div should contain the actors name and a ul with a list of their movies
  return  (
  <div>
    <h1>Actors Page</h1>
    {actorItems}
    </div>
    );
}

export default Actors;
