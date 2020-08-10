import React, { Component } from "react";

import "../css/Detail.css";

export default class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    console.log(location);

    if (location.state) {
      return (
        <div className="detail_container">
          <img src={location.state.poster} alt={location.state.title}></img>
          <h1>{location.state.title}</h1>
          <h3>{location.state.year}</h3>
          <h3>{location.state.genres}</h3>
          <h4>{location.state.summary}</h4>
        </div>
      );
    } else {
      return null;
    }
  }
}
