import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  movieList = () => {
    const movielist = axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
  componentDidMount() {
    this.movieList();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}
