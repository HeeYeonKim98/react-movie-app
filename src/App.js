import React, { Component } from "react";
import axios from "axios";
import Movie from "./components/Movie";

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
      isLoading: false,
      movies: movies,
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
                <Movie title={m.title} year={m.year} summary={m.summary} />
              );
            })}
      </div>
    );
  }
}
