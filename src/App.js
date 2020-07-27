import React, { Component } from "react";
import axios from "axios";
import Movie from "../src/components/Movie";

export default class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  movieList = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");

    this.setState({
      movies,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.movieList();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((m) => {
              return (
                <Movie
                  key={m.key}
                  id={m.id}
                  title={m.title}
                  year={m.year}
                  summary={m.summary}
                  poster={m.poster}
                ></Movie>
              );
            })}
      </div>
    );
  }
}
