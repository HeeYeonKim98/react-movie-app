import React from "react";

const Movie = ({ id, title, year, summary, poster }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h5>{year}</h5>
      <div>{summary}</div>
      <div>{poster}</div>
    </div>
  );
};

export default Movie;
