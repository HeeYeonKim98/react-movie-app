import React from "react";
import "../css/Movie.css";

const Movie = ({ poster, title, year, summary, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h2 className="movie_title">{title}</h2>
        <h5 className="movie_year">{year}</h5>
        <ul>
          {genres.map((g) => (
            <li>{g}</li>
          ))}
        </ul>
        <p className="movie_summary">{summary.slice(0, 200)} . . . .</p>
      </div>
    </div>
  );
};

export default Movie;
