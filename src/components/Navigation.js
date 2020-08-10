import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}
