import React, { Component } from "react";
import Movie from "./components/Movie";
import axios from "axios";
import "./css/App.css";

export default class App extends Component {
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

//로딩 중 띄웠다가 바로 웹페이지 전환 -> 영화리스트 : title, year, summary, poster
//웹페이지 전환 전에 api 가져오기 -> axios
