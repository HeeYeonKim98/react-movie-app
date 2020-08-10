import React from "react";
import "../css/Movie.css";
import { Link } from "react-router-dom";

const Movie = ({ poster, title, year, genres, summary }) => {
  return (
    <div className="movie">
      <Link
        to={{ pathname: "/detail", state: { title, year, genres, summary } }}
      >
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
      </Link>
    </div>
  );
};

export default Movie;
