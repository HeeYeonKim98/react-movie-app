//영화 리스트 화면
import React, { Component } from "react";
import Movie from "../components/Movie";
import axios from "axios";
import "../css/Home.css";

export default class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  MovieList = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");

    this.setState({
      movies: movies,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.MovieList();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((m) => {
              return (
                <Movie
                  key={m.id}
                  id={m.id}
                  year={m.year}
                  title={m.title}
                  summary={m.summary}
                  poster={m.medium_cover_image}
                  genres={m.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}
