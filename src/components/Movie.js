import React from "react";
import "../css/Movie.css";

const Movie = ({ poster, title, year, summary, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div>
        <h2>{title}</h2>
        <h5>{year}</h5>
        <p>{summary.slice(0, 10)}...❣️</p>
        <ul>
          {genres.map((g) => (
            <li>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movie;
