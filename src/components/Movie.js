import React from "react";

const Movie = ({ id, title, year, summary, poster }) => {
  return (
    <div>
      <div>{id}</div>
      <div>{title}</div>
      <div>{year}</div>
      <div>{summary}</div>
      <div>{poster}</div>
    </div>
  );
};

export default Movie;
